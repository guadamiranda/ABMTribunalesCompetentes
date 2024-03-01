import React from "react";
import "./Button.css";

const Button = ({ textoBoton, onClickFunction }) => {
  return (
    <div
      className={"button"}
      onClick={onClickFunction}
    >
      {textoBoton}
    </div>
  );
};

export default Button;
