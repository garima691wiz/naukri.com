import ProfileCard from "../components/profile/ProfileCard";
import UserJobs from "../components/profile/UserJobs";

function ProfilePage() {
  return (
    <div className="relative mt-12 flex w-full flex-wrap justify-center gap-8 px-4">
      <div className="sticky top-36 hidden lg:block">
        <div className="sticky top-36">
          <ProfileCard />
        </div>
      </div>
      <div className="top-36 block lg:hidden">
        <ProfileCard />
      </div>
      <div>
        <UserJobs />
      </div>
    </div>
  );
}

export default ProfilePage;
