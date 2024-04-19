import { useNavigate } from "react-router-dom";
import "../styles/Common.css";

interface Props {
  page_path: string;
  title: string;
  image: string;
  skillIcons: JSX.Element;
}

const ProjectCard = ({ page_path, title, image, skillIcons }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card clickable-component"
      style={{ width: "18rem" }}
      onClick={() => navigate(page_path)}
    >
      <img src={image} className="card-img-top" alt="project_image"></img>

      <div className="card-body">
        <h3 className="card-text">{title}</h3>
      </div>
      <div className="technology-icon-container">{skillIcons}</div>
    </div>
  );
};

export default ProjectCard;
