import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/NavigateBar.css";

const AnchorLinks = () => {
  return (
    <>
      <li className="nav-item">
        <AnchorLink
          href="#skills"
          className="nav-link navigate-bar-anchor-button"
        >
          Skills
        </AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink
          href="#experience"
          className="nav-link navigate-bar-anchor-button"
        >
          Experience
        </AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink
          href="#projects"
          className="nav-link navigate-bar-anchor-button"
        >
          Projects
        </AnchorLink>
      </li>
    </>
  );
};

export default AnchorLinks;
