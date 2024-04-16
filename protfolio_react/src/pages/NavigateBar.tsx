import EmailButton from "../components/EmailButton";
import GithubButton from "../components/GithubButton";
import LinkedinButton from "../components/LinkedinButton";

const NavigateBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <h3 style={{ color: "white" }}>Charlie Wu</h3>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/ProtfolioReact/#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ProtfolioReact/#/projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ProtfolioReact/#/experience">
              Experience
            </a>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <GithubButton />
            <LinkedinButton />
            <EmailButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigateBar;
