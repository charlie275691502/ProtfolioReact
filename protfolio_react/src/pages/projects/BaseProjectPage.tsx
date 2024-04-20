import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import NavigateBar from "../../components/NavigateBar";
import "../../styles/ProjectPage.css";

interface Props {
  title: string;
  images: string[];
  skillIcons: JSX.Element;
  githubUrl?: string;
  demoUrl?: string;
  content: JSX.Element;
}

const BaseProjectPage = ({
  title,
  images,
  skillIcons,
  githubUrl,
  demoUrl,
  content,
}: Props) => {
  return (
    <>
      <NavigateBar showAnchorLinks={false} />
      <div>
        <div className="project-page-container">
          <div className="project-page-head-container">
            <Carousel images={images} />
            <h1 className="project-title">{title}</h1>
            <div className="technology-icon-container ">{skillIcons}</div>
            {githubUrl && (
              <Button
                text="Github Repository"
                onClickButton={() =>
                  window.open(githubUrl, "_blank", "noopener")
                }
              />
            )}
            {demoUrl && (
              <Button
                text="Try Yourself"
                onClickButton={() => window.open(demoUrl, "_blank", "noopener")}
              />
            )}
          </div>
          {content}
        </div>
      </div>
    </>
  );
};

export default BaseProjectPage;
