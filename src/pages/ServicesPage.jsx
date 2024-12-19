import ServiceCard from "../components/naukariService/ServiceCard";
import { naukariServices } from "../utils/constants/naukariServices";

function ServicesPage() {
  return (
    <div className="mt-12">
      <div className="mb-8 p-4 text-center">
        <h2 className="mb-2 text-4xl font-semibold tracking-tight">
          Move ahead in career, faster
        </h2>
        <p className="font-semibold">with our paid services</p>
      </div>
      <div className="flex w-auto flex-wrap justify-center gap-6 p-2">
        {naukariServices.map((naukariService, index) => (
          <ServiceCard naukariService={naukariService} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
