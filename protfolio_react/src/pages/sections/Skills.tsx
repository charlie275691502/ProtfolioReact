import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiDjango,
  SiDocker,
  SiGit,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiMicrosoftexcel,
  SiPostgresql,
  SiPython,
  SiReact,
  SiUnity,
} from "react-icons/si";
import Icon, { IconType } from "../../components/Icon";

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-section bg-white">
        <div className="skills-category">
          <h2>Languages</h2>
          <div className="technology-icon-container">
            <Icon type={IconType.Csharp} />
            <Icon type={IconType.Cplusplus} />
            <Icon type={IconType.Python} />
            <Icon type={IconType.Javascript} />
            <Icon type={IconType.Java} />
            <Icon type={IconType.Html5} />
          </div>
        </div>
        <div className="skills-category">
          <h2>Software</h2>
          <div className="technology-icon-container">
            <Icon type={IconType.Unity} />
            <Icon type={IconType.Git} />
            <Icon type={IconType.Docker} />
            <Icon type={IconType.Postgresql} />
            <Icon type={IconType.Django} />
            <Icon type={IconType.React} />
            <Icon type={IconType.Googlesheets} />
            <Icon type={IconType.Microsoftexcel} />
          </div>
        </div>
        <div className="skills-category">
          <h2>Principles</h2>
          <div>
            <li>Agile Software Development</li>
            <li>Design Patterns</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
