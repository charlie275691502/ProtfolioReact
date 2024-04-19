import ContactIcons from "./ContactIcons";
import "../styles/NavigateBar.css";
import AnchorLinks from "./AnchorLinks";

interface Props {
  showAnchorLinks: boolean;
}

const NavigateBar = ({ showAnchorLinks }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navigate-bar-container">
          <li className="nav-item active">
            <a className="navigate-bar-title" href="/ProtfolioReact/#">
              Charlie Wu
            </a>
          </li>
          {showAnchorLinks && <AnchorLinks />}
        </ul>
        <div className="ms-auto">
          <ContactIcons />
        </div>
      </div>
    </nav>
  );
};

export default NavigateBar;
