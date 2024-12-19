import { SiTicktick } from "react-icons/si";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function NewToNaukari() {
  const features = [
    "One click apply using Naukri profile.",
    "Get relevant job recommendations.",
    "Showcase profile to top companies.",
    "Know application status on applied jobs.",
  ];
  return (
    <div className="flex max-w-[400px] flex-col gap-8 rounded-3xl border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-semibold">New to Naukari?</h2>
      <div className="space-y-3">
        {features.map((feature, i) => (
          <div key={i}>
            <SiTicktick className="inline-block h-3 w-4 text-green-500" />
            <span className="ml-2">{feature}</span>
          </div>
        ))}
      </div>
      <Link
        to="/auth/register"
        className="block w-36 rounded-full border border-blue-600 px-4 py-2 text-center text-blue-600 hover:bg-blue-50"
      >
        Register Now
      </Link>
      <LazyLoadImage
        src="/images/auth/newToNaukari.png"
        alt="new to naukari"
        className="w-[200px] self-end"
        w={100}
        //   effect="blur"
      />
    </div>
  );
}

export default NewToNaukari;
