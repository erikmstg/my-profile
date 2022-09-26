import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SkillsContent from "./skills/SkillsContent";

const SkillsSection = () => {
  return (
    <section className="py-28 bg-gray-background" id="skills">
      <div className="container mx-auto px-12 2xl:px-5 xl:px-5 lg:px-6 md:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionSubTitle>Some of my knowledges</SectionSubTitle>
        <SkillsContent />
      </div>
    </section>
  );
};

export default SkillsSection;
