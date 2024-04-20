import Button from "../../components/Button";
import ImagesDisplayer from "../../components/ImagesDisplayer";
import NavigateBar from "../../components/NavigateBar";
import "../../styles/ProjectPage.css";

interface Props {
  title: string;
  images: string[];
  darkThemeImageIndicator: boolean;
  skillIcons: JSX.Element;
  githubUrl?: string;
  demoUrl?: string;
  content: JSX.Element;
}

const BaseProjectPage = ({
  title,
  images,
  darkThemeImageIndicator,
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
            <ImagesDisplayer images={images} isDark={darkThemeImageIndicator} />
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
