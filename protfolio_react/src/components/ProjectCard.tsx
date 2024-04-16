import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  image: string;
}

const ProjectCard = ({ id, title, image }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card clickable-component"
      style={{ width: "18rem" }}
      onClick={() => navigate(id + "/")}
    >
      <img src={image} className="card-img-top" alt="image"></img>

      <div className="card-body">
        <h1 className="card-text">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
