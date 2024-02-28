import React from "react";
import Logo from '../../../images/logoPJ.jpg'
import './header.css'

const Header = () => {
  return (
    <div id="cabecera">
        <div className="container">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 text-right">
            <img
              src={Logo}
              alt="Poder Judicial"
              className="img-responsive"
              style={{ maxHeight: "65px" }}
            />
          </div>
      </div>
      <div
        id="lineaVerdeInstitucional"
        className="lineaVerdeInstitucional"
      />
    </div>
  );
};

export default Header;