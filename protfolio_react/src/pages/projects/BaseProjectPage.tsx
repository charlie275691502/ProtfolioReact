import Button from "../../components/Button";

interface Props {
  title: string;
  image: string;
  skillIcons: JSX.Element;
  githubUrl?: string;
  demoUrl?: string;
  content: JSX.Element;
}

const BaseProjectPage = ({
  title,
  image,
  skillIcons,
  githubUrl,
  demoUrl,
  content,
}: Props) => {
  return (
    <div>
      <div className="project-container">
        <img src={image} alt={image} className="project-image" />
        <h1 className="project-title">{title}</h1>
        <div className="technology-icons">{skillIcons}</div>
        {githubUrl && (
          <Button
            text="Github Repository"
            onClickButton={() => window.open(githubUrl, "_blank", "noopener")}
          />
        )}
        {demoUrl && (
          <Button
            text="Try Yourself"
            onClickButton={() => window.open(demoUrl, "_blank", "noopener")}
          />
        )}
        {content}
      </div>
    </div>
  );
};

export default BaseProjectPage;
