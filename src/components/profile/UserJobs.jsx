import { useEffect, useState } from "react";
// import { samplejobsData } from "../../utils/sampledata";
import JobCard from "../jobs/JobCard";
import { useSelector } from "react-redux";

function UserJobs() {
  const [category, setCategory] = useState("savedJobs");
  const [curJobs, setCurJob] = useState([]);
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs || []);
  const appliedJobs = useSelector(
    (state) => state.appliedJobs.appliedJobs || [],
  );

  useEffect(() => {
    if (category === "savedJobs") {
      setCurJob(savedJobs);
    } else {
      setCurJob(appliedJobs);
    }
  }, [category]);

  function handleSelect(e) {
    setCategory(e.target.value);
  }

  return (
    <div>
      <div>
        <select
          name="category Select"
          id=""
          className="mb-6 w-full min-w-[350px] max-w-2xl p-2 text-center font-semibold outline-none"
          value={category}
          onChange={handleSelect}
        >
          <option value="savedJobs">Saved Jobs</option>
          <option value="appliedJobs">Applied Jobs</option>
        </select>
      </div>
      <div className="space-y-6">
        {curJobs.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <p className="text-center text-sm text-gray-500">
              No jobs found for selected category.
            </p>
          </div>
        ) : (
          curJobs.map((jobData, index) => (
            <JobCard key={index} jobData={jobData} />
          ))
        )}
      </div>
    </div>
  );
}

export default UserJobs;
