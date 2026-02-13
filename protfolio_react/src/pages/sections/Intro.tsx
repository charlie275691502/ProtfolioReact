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
            Completed a Master of Artificial Intelligence from the University of
            Technology Sydney with six years of working experience — four years in
            game development and two years in frontend engineering. Passionate
            about game development and software engineering, bringing strong
            understanding of multiple programming languages and team
            communication skills. I am enthusiastic about delivering high-quality
            projects on time.
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
