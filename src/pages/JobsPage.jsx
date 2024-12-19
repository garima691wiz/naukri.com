import React, { useEffect, useState } from "react";
import { baseApi } from "../api/axiosInstance"; // Import the axios instance
import JobCard from "../components/jobs/JobCard";
import SearchBar from "../components/ui/SearchBar";
import NaukariFastForward from "../components/jobs/NaukariFastForward";
import Loader from "../components/ui/Loader";
import { useSelector } from "react-redux";
import { debounce } from "lodash"; // You can install lodash for debounce functionality

function JobsPage() {
  const params = useSelector((state) => state.jobSearchParams); // Fetching search parameters from Redux state

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs using the axios instance (baseApi)
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await baseApi.get("/v2/list", {
        params: {
          query: params.query || "", // Allow empty string to fetch all jobs initially
          location: params.location || "India", // Default location
        },
      });

      console.log("API Response:", response.data); // Log the response for debugging

      if (response.data?.jobs && Array.isArray(response.data.jobs)) {
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs); // Initially show all jobs
      } else {
        throw new Error("No jobs found in the response.");
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err); // Log full error
      setError(`Failed to fetch job posts: ${err.message || err}`);
      setLoading(false);
    }
  };

  // Re-fetch jobs whenever the params change
  useEffect(() => {
    if (params) {
      fetchJobs(); // Call fetchJobs whenever params change
    }
  }, [params]);

  // Handle search filter
  const handleSearch = debounce(({ title, location, employmentType }) => {
    console.log("Search params in handleSearch:", title, location, employmentType); // Log search params

    const filtered = jobs.filter((job) => {
      const matchesTitle = title
        ? job.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesEmploymentType = employmentType
        ? job.employmentType.toLowerCase().includes(employmentType.toLowerCase())
        : true;

      return matchesTitle && matchesLocation && matchesEmploymentType;
    });

    console.log("Filtered Jobs:", filtered); // Log filtered results
    setFilteredJobs(filtered); // Update filtered jobs based on search criteria
  }, 500); // Debounced by 500ms

  if (loading) {
    return <Loader />; // Show loader while fetching
  }

  if (error) {
    return <p>{error}</p>; // Show error message
  }

  return (
    <div className="relative mt-12 flex w-full justify-center gap-8 px-2">
      <div>
        <SearchBar type="jobs" onSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((jobData, index) => (
              <JobCard key={index} jobData={jobData} />
            ))
          ) : (
            <p>No jobs found</p> // Show message when no jobs match the search criteria
          )}
        </div>
      </div>
      <div className="sticky top-36 hidden md:block">
        <NaukariFastForward />
      </div>
    </div>
  );
}

export default JobsPage;
