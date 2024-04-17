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

const Skills = () => {
  return (
    <>
      <div id="skills" className="skills-section bg-white">
        <div className="skills-category">
          <h2>Languages</h2>
          <div className="technology-icon-container">
            <SiCsharp className="technology-icon" />
            <SiCplusplus className="technology-icon" />
            <SiPython className="technology-icon" />
            <SiJavascript className="technology-icon" />
            <FaJava className="technology-icon" />
            <SiHtml5 className="technology-icon" />
          </div>
        </div>
        <div className="skills-category">
          <h2>Software</h2>
          <div className="technology-icon-container">
            <SiUnity className="technology-icon" />
            <SiGit className="technology-icon" />
            <SiDocker className="technology-icon" />
            <SiPostgresql className="technology-icon" />
            <SiDjango className="technology-icon" />
            <SiReact className="technology-icon" />
            <SiGooglesheets className="technology-icon" />
            <SiMicrosoftexcel className="technology-icon" />
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
