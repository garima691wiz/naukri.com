import { Link } from "react-router-dom";
import CategoryList from "./Categories";
import SearchBar from "../ui/SearchBar";
import SuggestedTags from "./SuggestedTags";

function Hero() {
  return (
    <div className="mb-24 flex min-h-screen flex-col items-center space-y-16 bg-gray-50 p-4 pt-24">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
          Find your dream job now
        </h1>
        <p className="mt-2 text-gray-500">5 lakh+ jobs for you to explore</p>
      </div>

      {/* search bar section */}
      <div className="space-y-6">
        <SearchBar />
        <SuggestedTags />
      </div>

      {/* \add banner section */}
      <Link
        to="/"
        className="flex w-full max-w-4xl items-center justify-between rounded-lg"
      >
        <img
          src="/images/home/naukariBanner.png"
          alt="Mock interview"
          //   className="h-32 object-contain"
        />
      </Link>

      {/* category list */}
      <CategoryList />
    </div>
  );
}

export default Hero;
