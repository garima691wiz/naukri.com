import { useLocation } from "react-router-dom";
import JobDetailsDescreptionCard from "../components/jobs/JobDetailsDescreptionCard";
import NaukariFastForward from "../components/jobs/NaukariFastForward";
import BeAware from "../components/jobs/BeAware";
import JobDetailsHeaderCard from "../components/jobs/JobDetailsHeaderCard";

function JobDetailsPage() {
  const location = useLocation();
  const { jobData: curJob } = location.state || {};

  return (
    <div className="mt-12 flex justify-center gap-6">
      <div className="space-y-6">
        <JobDetailsHeaderCard curJob={curJob} />
        <JobDetailsDescreptionCard curJob={curJob} />
      </div>
      <div className="sticky top-36 hidden md:block">
        <div className="sticky top-36 flex flex-col gap-6">
          <NaukariFastForward />
          <BeAware />
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
