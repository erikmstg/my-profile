import React from "react";
import ProjectsContent from "./projects/ProjectsContent";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-20 2xl:px-8 xl:px-16 md:px-11">
        <SectionTitle>Projects</SectionTitle>
        <SectionSubTitle>Mini portfolio</SectionSubTitle>
        <ProjectsContent />
      </div>
    </section>
  );
};

export default ProjectsSection;
