import profile from "../../assets/profile.jpg";
import "../../styles/Intro.css";

const Intro = () => {
  return (
    <>
      <div id="intro" className="intro-container bg-dark">
        <div className="intro-left-content">
          <h1 className="intro-name">Charlie Wu</h1>
          <p className="intro-title">Software Engineer and Game Developer</p>
          <p className="intro-description">
            Completed a Master of Artificial Intelligence at the University of Technology Sydney with six years of professional experience — four years in game development and two years in frontend engineering. Experienced as a software engineer with a strong understanding of multiple programming languages and solid team communication skills. Passionate about game development and software development, and committed to delivering high-quality projects on time.
          </p>
        </div>
        <div className="intro-right-content">
          <img src={profile} alt="Charlie Wu" className="intro-profile-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
