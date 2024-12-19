/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

function JobDetailsDescreptionCard({ curJob = {} }) {
  const { jobDescription } = curJob || {};

  const points = jobDescription
    ?.split(/\.\s+/)
    .map((point) => point.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-2xl rounded-lg border bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl md:p-6">
      <h2 className="mb-6 font-semibold">Job descreption</h2>
      Junior Web Developer Astor & Sanders Corporation (Astor) is an award-winning IT solutions provider headquartered in McLean, VA seeking a Junior Web Developer. This is a full-time and hybrid position located in Silver Spring, MD. Roles & Responsibilities Assist in the development and maintenance of internal web applications • Support the development team in full stack coding, testing, and debugging as needed • Contribute to responsive web design efforts that enhance user experience across all devices • Collaborate with cross-functional teams to gather requirements and enhance existing applications • Help troubleshoot and resolve website issues and bugs • Document processes, code, and methodologies to maintain project transparency • Stay informed on current industry trends, technologies, and best practices in web development • Perform additional duties as assigned to support the team and projects • Additional duties as assigned Requirement sSkills & Experience
      <div className="space-y-3">
        {points?.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </div>
    </div>
  );
}

export default JobDetailsDescreptionCard;
