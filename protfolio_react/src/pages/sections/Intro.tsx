import profile from "../../images/profile.jpg";

const Intro = () => {
  return (
    <>
      <div id="intro" className="intro-container bg-dark">
        <div className="intro-left-content">
          <h1 style={{ color: "white", fontSize: "6rem" }}>Charlie Wu</h1>
          <p style={{ color: "white", fontSize: "4rem" }}>
            I am a <span style={{ color: "yellow" }}>Software Developer</span>
          </p>
        </div>
        <div className="intro-right-content">
          <img src={profile} alt="Charlie Wu" />
        </div>
      </div>
    </>
  );
};

export default Intro;
