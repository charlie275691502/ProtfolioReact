import React from "react";

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
          <p className="navbar-brand">Charlie Wu</p>
          <li className="nav-item active">
            <a className="nav-link" href="/#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/experience">
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigateBar;
