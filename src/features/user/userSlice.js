import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import auth, { db } from "../../firebase/firebase";
import { Store } from "../../app/store";
import { doc, getDoc } from "firebase/firestore";
import userInitialState from "../../utils/constants/userInitialState";
import { clearAppliedJobs } from "../appliedJobs/appliedJobsSlice";
import { clearSavedJobs } from "../savedjobs/savedJobsSlice";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: function (state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    //  fetch the user data from the firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      Store.dispatch(
        setUser({
          id: userData.uid,
          email: userData.email,
          fullName: userData.fullName,
          mobile: userData.mobile,
          city: userData.city,
          isLoggedIn: true,
        }),
      );
    }
  } else {
    Store.dispatch(setUser(userInitialState));
    Store.dispatch(clearAppliedJobs());
    Store.dispatch(clearSavedJobs());
    localStorage.removeItem("appliedJobs");
    localStorage.removeItem("savedJobs");
  }
});
