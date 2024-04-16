import logo from "../images/profile.jpg";

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
          <img src={logo} alt="Charlie Wu" />
        </div>
      </div>
      <div className="skills-section bg-white">
        <div className="skills-category">
          <h2>Languages</h2>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>C</li>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Software</h2>
          <ul>
            <li>Unity</li>
            <li>Git</li>
            <li>Docker</li>
            <li>PostgreSQL</li>
            <li>Django</li>
            <li>Google Spreadsheet</li>
            <li>Excel</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Principles</h2>
          <ul>
            <li>Agile Software Development</li>
            <li>Design Patterns</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
