import AnchorLink from "react-anchor-link-smooth-scroll";

const AnchorLinks = () => {
  return (
    <>
      <li className="nav-item">
        <AnchorLink href="#skills">
          <button type="button" className="nav-link btn">
            Skills
          </button>
        </AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink href="#experience">
          <button type="button" className="nav-link btn">
            Experience
          </button>
        </AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink href="#projects">
          <button type="button" className="nav-link btn">
            Projects
          </button>
        </AnchorLink>
      </li>
    </>
  );
};

export default AnchorLinks;
