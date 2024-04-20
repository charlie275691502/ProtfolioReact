import ProjectCard from "../../components/ProjectCard";
import { ProjectDatas } from "../../datas/ProjectList";
import slugify from "@sindresorhus/slugify";
import "../../styles/Projects.css";

const Projects = () => {
  return (
    <>
      <h1 id="projects" className="projects-title">
        My personal projects
      </h1>
      <div className="container text-center">
        <div className="row row-cols-3">
          {ProjectDatas.map((project) => {
            return (
              <div className="col projects-col" key={project.title}>
                <ProjectCard
                  page_path={"projects/" + slugify(project.title) + "/"}
                  title={project.title}
                  image={project.images[0]}
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
