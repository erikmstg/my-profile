import ProfileSummary from "./ProfileSummary";
import ProfileImage from "./ProfileImage";

const ProfileContent = () => {
  return (
    <div className="flex mx-auto mt-10 lg:items-center md:items-start flex-wrap xl:w-9/12 lg:w-11/12 md:w-10/12">
      <ProfileImage />
      <ProfileSummary />
    </div>
  );
};

export default ProfileContent;
