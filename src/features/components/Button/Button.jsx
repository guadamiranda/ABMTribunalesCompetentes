import React from "react";
import "./Button.css";

const Button = ({ textoBoton, onClick }) => {
  return (
    <div
      className={"button"}
      onClick={onClick}
    >
      {textoBoton}
    </div>
  );
};

export default Button;
