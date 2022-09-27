import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectsContent = () => {
  return (
    <div className="flex -mx-4 mt-20 flex-wrap">
      <div className="md:w-6/12 w-full px-4 pb-10">
        <ProjectItem
          title="Movie app"
          subTitle="A web application that provides information related to popular movies"
          image="/project/movie.png"
          link="https://github.com/erikmstg/travels"
        />
      </div>
      <div className="md:w-6/12 w-full px-4 pb-10">
        <ProjectItem
          border
          title="Myth Booking"
          subTitle="A simple hotel booking view"
          image="/project/booking.png"
          link="https://github.com/erikmstg/movies-sample.github.io"
        />
      </div>
    </div>
  );
};

export default ProjectsContent;
