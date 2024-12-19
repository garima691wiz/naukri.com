/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSavedJob } from "../../features/savedjobs/savedJobsSlice";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";

const JobCard = ({ jobData }) => {
  const {
    title,
    companyName,
    formattedLocation,
    jobDescription,
    workplaceTypes,
    listedAt,
  } = jobData || {};

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.isLoggedIn);

  // SAVING JOB FUNCTIONALITY
  const savedJobs = useSelector((state) => state.savedJobs.savedJobs || []);
  const isSaved = savedJobs.some((job) => jobData.title === job.title);

  const handleToggleSaveJob = function () {
    if (!loggedIn) {
      toast.error("Please login first to save your jobs");
      navigate("/auth/login");
      return;
    }
    dispatch(toggleSavedJob(jobData));
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col space-y-3">
        <div>
          {/* Title and Save Button */}
          <div className="flex items-start justify-between">
            <Link
              className="block"
              to={`/jobs/${encodeURIComponent(title)}`}
              state={{ jobData }}
            >
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </Link>
            <button
              onClick={handleToggleSaveJob}
              className="text-gray-500 hover:text-blue-500"
            >
              {isSaved ? (
                <FaBookmark size={24} className="text-blue-500" />
              ) : (
                <FaRegBookmark size={24} />
              )}
            </button>
          </div>

          {/* Employer Name */}
          <Link
            className="block"
            to={`/jobs/${encodeURIComponent(title)}`}
            state={{ jobData }}
          >
            <p className="text-sm font-semibold">{companyName}</p>
          </Link>
        </div>

        {/* Details Section */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 md:gap-4">
          <div className="flex items-center">
            <CiLocationOn className="mr-1 text-lg" />
            <span>
              {workplaceTypes && workplaceTypes.includes("Remote")
                ? "Remote"
                : formattedLocation}
            </span>
          </div>
          <div className="h-4 self-baseline border-[1px]"></div>
          <div className="flex items-center">
            <CiCalendarDate className="mr-1 text-lg" />
            <span> {new Date(listedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Job Description */}
        <Link
          className="block"
          to={`/jobs/${encodeURIComponent(title)}`}
          state={{ jobData }}
        >
          <p className="mt-2text-sm text-gray-600">
            <TbListDetails className="mr-2 inline" />
            {jobDescription?.slice(0, 150)}...
          </p>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
