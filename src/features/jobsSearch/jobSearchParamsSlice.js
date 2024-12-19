import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "software developer",
  page: 1,
  experience: null, // Experience level (e.g., "2" for Entry level)
  jobType: null, // Job type (e.g., "F,P" for Full-time and Part-time)
  sortBy: "DD", // Sort order: "DD" (most recent) or "R" (most relevant)
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
    resetSearchParams: () => {
      return { ...initialState };
    },
  },
});

export const { setSearchParams, resetSearchParams } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
