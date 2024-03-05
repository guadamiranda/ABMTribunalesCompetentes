import React from "react";
import "./header.css";

const Header = () => {
  /*<nav className="navbar navbar-expand-lg navbar-light bg-light"> */
  return (
    <div id="cabecera">
      <nav className="shadow navbar navbar-expand-lg navbar-light bg-light pb-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Administración Tribunales Competentes
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
