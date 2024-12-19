import { createSlice } from "@reduxjs/toolkit";

// Function to get saved jobs from local storage
function getFromLocalStorage() {
  const savedJobs = localStorage.getItem("savedJobs");
  if (savedJobs) {
    return JSON.parse(savedJobs);
  }
  return {
    userId: "",
    savedJobs: [],
  };
}

// Function to save jobs to local storage
function saveToLocalStorage(jobState) {
  localStorage.setItem("savedJobs", JSON.stringify(jobState));
}

// Initial state for the job list
const initialState = getFromLocalStorage();

// Job slice for managing job save functionality
const savedJobSlice = createSlice({
  name: "jobs",
  initialState,

  reducers: {
    toggleSavedJob(state, action) {
      const job = action.payload;
      const existingJobIndex = state.savedJobs.findIndex(
        (savedJob) => savedJob.title === job.title,
      );

      if (existingJobIndex === -1) {
        // If job doesn't exist, add it to the saved list
        state.savedJobs.push(job);
      } else {
        // If job exists, remove it from the saved list
        state.savedJobs.splice(existingJobIndex, 1);
      }

      saveToLocalStorage(state); // Update local storage with the current state
    },

    clearSavedJobs(state) {
      state.savedJobs = [];
      saveToLocalStorage(state); // Clear saved jobs in local storage
    },
  },
});

// Export actions
export const { toggleSavedJob, clearSavedJobs } = savedJobSlice.actions;
export default savedJobSlice.reducer;
