import { FaJava } from "react-icons/fa";
import profile from "../images/profile.jpg";
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

const Home = () => {
  return (
    <>
      <div className="homepage-container bg-dark">
        <div className="left-content">
          <h1 style={{ color: "white", fontSize: "6rem" }}>Charlie Wu</h1>
          <p style={{ color: "white", fontSize: "4rem" }}>
            I am a <span style={{ color: "yellow" }}>Software Developer</span>
          </p>
        </div>
        <div className="right-content">
          <img src={profile} alt="Charlie Wu" />
        </div>
      </div>
      <div className="skills-section bg-white">
        <div className="skills-category">
          <h2>Languages</h2>
          <div>
            <SiCsharp className="icon" />
            <SiCplusplus className="icon" />
            <SiPython className="icon" />
            <SiJavascript className="icon" />
            <FaJava className="icon" />
            <SiHtml5 className="icon" />
          </div>
        </div>
        <div className="skills-category">
          <h2>Software</h2>
          <div>
            <SiUnity className="icon" />
            <SiGit className="icon" />
            <SiDocker className="icon" />
            <SiPostgresql className="icon" />
            <SiDjango className="icon" />
            <SiReact className="icon" />
            <SiGooglesheets className="icon" />
            <SiMicrosoftexcel className="icon" />
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

export default Home;
