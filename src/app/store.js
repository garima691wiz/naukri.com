import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import jobSearchParamsReducer from "../features/jobsSearch/jobSearchParamsSlice";
import savedJobsReducer from "../features/savedjobs/savedJobsSlice";
import appliedJobsReducer from "../features/appliedJobs/appliedJobsSlice";
import { apiSlice } from "../features/jobsSearch/jobsSearchSlice";

// Configure the Redux store
export const Store = configureStore({
  reducer: {
    user: userReducer, // Handles user-related state
    jobSearchParams: jobSearchParamsReducer, // Handles job search parameters
    appliedJobs: appliedJobsReducer, // Manages applied jobs
    savedJobs: savedJobsReducer, // Manages saved jobs
    [apiSlice.reducerPath]: apiSlice.reducer, // Manages API state from createApi
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add middleware for API
});

export default Store;
