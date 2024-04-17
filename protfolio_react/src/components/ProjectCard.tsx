import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  image: string;
  skillIcons: JSX.Element;
}

const ProjectCard = ({ id, title, image, skillIcons }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card clickable-component"
      style={{ width: "18rem" }}
      onClick={() => navigate(id + "/")}
    >
      <img src={image} className="card-img-top" alt={"project-" + id}></img>

      <div className="card-body">
        <h3 className="card-text">{title}</h3>
      </div>
      <div className="technology-icons">{skillIcons}</div>
    </div>
  );
};

export default ProjectCard;
