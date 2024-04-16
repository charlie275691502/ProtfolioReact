import ProjectCard from "../components/ProjectCard";
import { ProjectList } from "../datas/ProjectList";
import slugify from "@sindresorhus/slugify";

const Projects = () => {
  return (
    <>
      <h1 className="skills-category"> My personal projects</h1>
      <div className="container text-center">
        <div className="row">
          {ProjectList.map((project) => {
            return (
              <div className="col" key={project.title}>
                <ProjectCard
                  id={slugify(project.title)}
                  title={project.title}
                  image={project.image}
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
