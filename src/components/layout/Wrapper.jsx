/* eslint-disable react/prop-types */
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Navbar from "../navigation/Navbar";

function Wrapper({ children }) {
  return (
    <main>
      <Navbar />
      <div className="bg-gray-50 pt-24"></div>
      <div>{children}</div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </main>
  );
}

export default Wrapper;
