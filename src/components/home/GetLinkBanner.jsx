import { Link } from "react-router-dom";

function GetLinkBanner() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-12 rounded-lg border bg-gradient-to-b from-white to-blue-50 p-6 lg:gap-6">
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-xl font-bold md:text-3xl">
            10M+ users are on the Naukri app
          </h3>
          <p className="text-sm">Get real-time job updates & more!</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex w-24 flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 md:w-36">
            <img
              src="/images/home/qrCode.svg"
              alt="qr code"
              className="w-24 md:h-24"
            />
            <p className="text-center text-xs sm:text-sm">scan to download</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link>
              <img
                src="/images/home/googleplay.png"
                className="h-10 w-32"
                alt="Google play"
              />
            </Link>
            <Link>
              <img
                src="/images/home/appStore.png"
                className="h-10 w-32"
                alt="App store"
              />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/home/userWithScreen.png"
          alt="Recommended jobs banner"
          className="max-h-80"
        />
      </div>
    </div>
  );
}

export default GetLinkBanner;
