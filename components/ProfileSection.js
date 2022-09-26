import ProfileContent from "./profile/ProfileContent";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

const ProfileSection = () => {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-8 lg:px-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionSubTitle>About me briefly</SectionSubTitle>
        <ProfileContent />
      </div>
    </section>
  );
};

export default ProfileSection;
