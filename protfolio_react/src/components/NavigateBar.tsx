import React from "react";

const NavigateBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/projects">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/experience">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigateBar;
