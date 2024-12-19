import { Link } from "react-router-dom";
import { BsFastForwardCircleFill } from "react-icons/bs";

function NaukariFastForward() {
  return (
    <div className="max-w-[250px] space-y-4 rounded-lg border bg-white p-4 shadow-sm">
      <div className="leading-tight tracking-tight">
        <p className="font-bold text-blue-600">Naukari</p>
        <p className="flex gap-[1px] font-bold uppercase italic text-blue-400">
          FAST F
          <span>
            <BsFastForwardCircleFill className="translate-y-[1px] text-red-600" />
          </span>
          RWARD
        </p>
        <p className="translate-x-6 text-xs">Speed Up Your Career</p>
      </div>
      <div>
        <h3 className="font-semibold">
          Get 3X more profile views from recruiters
        </h3>
        <p>Increase your chances of callback with Naukari FastForward</p>
      </div>
      <div className="sticky">
        <Link to="/" className="mt-4 text-blue-600">
          Know More
        </Link>
      </div>
    </div>
  );
}

export default NaukariFastForward;
