/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected({ children }) {
  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!loggedIn) {
        navigate("/");
      }
    }, 150);
  }, [loggedIn, navigate]);

  if (!loggedIn) {
    return null; // Return nothing while navigating
  }

  return <>{children}</>;
}

export default Protected;
