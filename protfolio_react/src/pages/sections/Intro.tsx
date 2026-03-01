import profile from "../../assets/profile.jpg";
import "../../styles/Intro.css";

const Intro = () => {
  return (
    <>
      <div id="intro" className="intro-container bg-dark">
        <div className="intro-left-content">
          <h1 className="intro-name">Charlie Wu</h1>
          <p className="intro-title">Fullstack Software Engineer | React, C#</p>
          <p className="intro-description">
            Software engineer with 4 years of C# development experience and 1.5 years of professional React experience in Australia. Experienced in building and maintaining production web applications, with strong frontend expertise and solid object-oriented programming foundations. Currently expanding backend knowledge through Django and .NET projects, focusing on RESTful API development and system design fundamentals.</p>
        </div>
        <div className="intro-right-content">
          <img src={profile} alt="Charlie Wu" className="intro-profile-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
