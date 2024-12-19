# Naukri Clone Website

A job search platform inspired by Naukri, built using modern web technologies to deliver a seamless experience. This project implements essential features for job seekers, including job listings, search functionality, and user authentication.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Details](#project-details)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out a live demo of the application [here](https://naukari-clone.vercel.app/).

## Features

- Responsive UI inspired by Naukri's design.
- Browse job listings and details without requiring login/signup.
- Secure user authentication using Firebase (email/password).
- Job Management: Apply for jobs and bookmark them for later.
- Authentication Redirect: Users attempting to apply/bookmark are redirected to login/signup if not authenticated.
- State Management: Redux Toolkit for efficient data handling.
- Search Functionality: Filter and search for jobs easily.
- Toast Notifications: Instant feedback using React-Toastify.

## Technologies Used

- **Frontend**: React, JavaScript
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **State Management**: Redux Toolkit with RTK Query
- **Authentication & Database**: Firebase
- **Notifications**: React-Toastify

## Installation

### Clone the repository:

```bash
git clone https://github.com/Sharatdevadiga/Naukri_Clone.git
cd Naukri_Clone
```

### Install dependencies:

```bash
npm install
```

### Set up Firebase:

1. Go to the Firebase Console and create a new project.
2. Enable Firebase Authentication (Email/Password) and Firestore.
3. Copy your Firebase configuration details.

### Configure environment variables:

Create a .env file in the project root and add your Firebase configuration:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Run the development server:

```bash
npm start
```

## Usage

- Browse job listings and search for jobs without logging in.
- Sign up or log in to apply for jobs or bookmark them.
- Use the search bar to filter jobs based on keywords.

## Project Details

This project ensures a user-friendly job search experience with the following features:

- **Frontend Interface Development**: Built an intuitive and responsive interface inspired by Naukri.
- **User Authentication**: Integrated Firebase for secure email/password authentication.
- **Job Management**: Users can apply for and bookmark jobs, with seamless state management via Redux Toolkit.
- **Search Functionality**: Implemented job search and filtering for easier discovery.
- **Authentication Redirects**: Ensures security by redirecting unauthenticated users to login/signup when accessing personalized features.
- **Notifications**: Instant feedback using React-Toastify.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


import React, { useEffect, useState } from "react";
import { baseApi } from "../api/axiosInstance"; // Import the axios instance
import JobCard from "../components/jobs/JobCard";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllJobs = async () => {
    try {
      const response = await baseApi.get("/v2/list", {
        params: {
          query: "ReactJs", // Example query
          location: "India", // Example location
        },
      });
      console.log("API Response:", response.data); // Log response for debugging
      setJobs(response.data.jobs); // Assuming 'jobs' is the key in the response
      setFilteredJobs(response.data.jobs); // Initially, show all jobs
      setLoading(false);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to fetch job posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleSearch = ({ title, location, employmentType }) => {
    console.log("Search params in handleSearch:", title, location, employmentType); // Log for debugging
  
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
  };

  return (
    <div className="jobs-container w-[80%] m-auto">
      <h2 className="text-2xl font-semibold mb-6">Job Listings</h2>

    
      {/* Show loading or error messages */}
      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}

      {/* Display filtered jobs */}
      <div className="flex flex-col gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              companyName={job.company}
              salary={job.salaryRange || "Not disclosed"}
              location={job.location || "N/A"}
              description={job.description || "No description available"}
              datePosted={job.datePosted || "Unknown"}
              employmentType={job.employmentType || "Not specified"} // Pass employment type
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
