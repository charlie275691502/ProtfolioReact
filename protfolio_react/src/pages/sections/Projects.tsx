import ProjectCard from "../../components/ProjectCard";
import { ProjectDatas } from "../../datas/ProjectList";
import slugify from "@sindresorhus/slugify";

const Projects = () => {
  return (
    <>
      <h1 id="projects" className="skills-category">
        My personal projects
      </h1>
      <div className="container text-center">
        <div className="row">
          {ProjectDatas.map((project) => {
            return (
              <div className="col" key={project.title}>
                <ProjectCard
                  page_path={"projects/" + slugify(project.title) + "/"}
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
