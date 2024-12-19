/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

const sampleData = {
  fullName: "User",
  email: "example123@gmail.com",
  mobile: "55656565656",
  city: "Bangalore",
};

function ProfileCard() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="flex w-[300px] max-w-[350px] flex-col items-center gap-6 rounded-3xl border bg-white p-4 py-6 shadow-md">
      <LazyLoadImage
        src="/images/user/userPlaceholder.png"
        alt="User placeholder image"
        height="150"
        width="150"
        className="h-32 w-32 rounded-full object-cover lg:h-44 lg:w-44"
      />

      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-xl font-bold">{user?.fullName}</h2>
        <p className="text-sm font-semibold text-gray-700">{user?.email}</p>
        <p className="text-sm font-semibold text-gray-700">{user?.mobile}</p>
        <p className="text-sm font-semibold text-gray-700">{user?.city}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
