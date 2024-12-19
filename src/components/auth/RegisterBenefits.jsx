import { FcOk } from "react-icons/fc";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RegisterBenefits() {
  const features = [
    "Build your profile and let recruiters find you",
    "Get job postings delivered right to your email",
    "Find a job and grow your career",
  ];
  return (
    <div className="max-w-[350px] space-y-4 rounded-3xl border bg-white p-4 py-6 shadow-md">
      <LazyLoadImage
        alt="Person waving"
        className="mx-auto w-[200px] rounded-3xl object-cover"
        src="/images/auth/naukariRegister.png"
        width={150}
        height="auto"
      ></LazyLoadImage>
      {/* <img src="/images/auth/naukariRegister.png" alt="Person waving" /> */}
      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-2">
            <div>
              <FcOk className="h-4 w-4 translate-y-1" />
            </div>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisterBenefits;
