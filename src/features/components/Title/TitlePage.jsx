import React from "react";
import "./TitlePage.css";

const TitlePage = ({ title }) => {
  return (
    <div className="d-flex justify-content-center font-weight-bold">
      <h3 className="title">{title}</h3>
    </div>
  );
};

export default TitlePage;
