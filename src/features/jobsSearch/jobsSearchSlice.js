import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://linkedin-data-scraper.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", "linkedin-data-scraper.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query({
        query(
          query = "software developer",
          page = 1,
          experience = null,
          jobType = null,
          sortBy = "DD",
        ) {
          // Define query parameters in an object
          const params = new URLSearchParams({
            query,
            page: page.toString(),
            sortBy, // Either "DD" (most recent) or "R" (most relevant)
          });

          // Conditionally add optional parameters
          if (experience) params.append("experience", experience);
          if (jobType) params.append("jobType", jobType);

          // Construct and return the full URL
          return `/search_jobs?${params.toString()}`;
        },
      }),
    };
  },
});

export const { useFetchJobsQuery } = apiSlice;
