import ProjectCard from "../../components/ProjectCard";
import { ProjectDatas } from "../../datas/ProjectList";
import { MiniProjectDatas } from "../../datas/MiniProjectList";
import slugify from "@sindresorhus/slugify";
import "../../styles/Projects.css";
import { useState } from "react";



const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', function(event){
      setWidth(window.innerWidth)
  });
  var containerClassName = width <= 770 ? "row row-cols-1" : width <= 990 ? "row row-cols-2" : "row row-cols-3";
  return (
    <>
      <h1 id="projects" className="projects-title">
        My personal projects
      </h1>
      <div className="container text-center">
        <div className={containerClassName}>
          {ProjectDatas.map((project) => {
            return (
              <div className="col projects-col" key={project.title}>
                <ProjectCard
                  page_path={"projects/" + slugify(project.title) + "/"}
                  title={project.title}
                  image={project.thumbnail}
                  skillIcons={project.skillIcons}
                />
              </div>
            );
          })}
        </div>
      </div>
      <h1 id="projects" className="projects-title">
        Mini projects
      </h1>
      <div className="container text-center">
        <div className={containerClassName}>
          {MiniProjectDatas.map((project) => {
            return (
              <div className="col projects-col" key={project.title}>
                <ProjectCard
                  page_path={"projects/" + slugify(project.title) + "/"}
                  title={project.title}
                  image={project.thumbnail}
                  skillIcons={project.skillIcons}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
