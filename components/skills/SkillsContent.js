import SkillCard from "./SkillCard";

const SkillsContent = () => {
  return (
    <div className="flex -mx-4 mt-20 px-2 flex-wrap md:px-4">
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="HTML" image="/ability/html-5.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="CSS" image="/ability/css-3.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard
          name="Javascript"
          image="/ability/javascript.svg"
          imageClassName="rounded-full"
        />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="PHP" image="/ability/php.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="React Js" image="/ability/react.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Node Js" image="/ability/nodejs.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Express Js" image="/ability/express.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Mongo DB" image="/ability/mongodb.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Next Js" image="/ability/nextjs.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Bootstrap" image="/ability/bootstrap.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Tailwind CSS" image="/ability/tailwindcss-icon.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Python" image="/ability/python.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="MySql" image="/ability/mysql.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Figma" image="/ability/figma.svg" />
      </div>
      <div className="md:w-4/12 w-full px-4 pb-8">
        <SkillCard name="Git" image="/ability/git-icon.svg" />
      </div>
    </div>
  );
};

export default SkillsContent;
