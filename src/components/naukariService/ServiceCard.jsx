/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ServiceCard({ naukariService }) {
  const { title, benefit, description, price, duration, image } =
    naukariService;

  console.log(naukariService);
  return (
    <div className="max-w-sm space-y-4 rounded-2xl bg-white p-6 shadow-md">
      <div className="mx-auto flex h-36 w-44 items-center justify-center rounded-full">
        <img className="mx-auto w-52" src={image} alt={title} />
      </div>
      <div>
        <p className="text-center text-sm font-semibold uppercase">{title}</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold text-slate-500">{benefit}</p>
        <p>{description}</p>
        <div className="mb-6 flex justify-between">
          <span>RS. {price}</span>
          <span>{duration}</span>
        </div>
        <Link to="#" className="block text-center font-semibold text-blue-700">
          Know More
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
