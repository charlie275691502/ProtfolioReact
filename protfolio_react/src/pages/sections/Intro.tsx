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
            Currently studying for a Master of Artificial Intelligence at the
            University of Technology Sydney with four years of working
            experience as a software engineer, seeking for internship to bring
            strong understanding of multiple programming languages and team
            communication skills to use. I am enthusiastic about software
            development and able to deliver tasks on time.
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
