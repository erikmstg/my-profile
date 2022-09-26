import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectsContent = () => {
  return (
    <div className="flex -mx-4 mt-20 flex-wrap">
      <div className="md:w-6/12 w-full px-2 pb-10">
        <ProjectItem
          title="Hasten"
          subTitle="Explorasi landing page"
          image="/project/page1.png"
        />
      </div>
      <div className="md:w-6/12 w-full px-2 pb-10">
        <ProjectItem
          title="Hasten"
          subTitle="Explorasi landing page"
          image="/project/page2.png"
        />
      </div>
      <div className="md:w-6/12 w-full px-2 pb-10">
        <ProjectItem
          title="Hasten"
          subTitle="Explorasi landing page"
          image="/project/page3.png"
        />
      </div>
      <div className="md:w-6/12 w-full px-2 pb-10 md:pb-0">
        <ProjectItem
          title="Hasten"
          subTitle="Explorasi landing page"
          image="/project/page4.png"
        />
      </div>
    </div>
  );
};

export default ProjectsContent;
