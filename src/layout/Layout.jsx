import TitlePage from "../features/components/Title/TitlePage";
import Header from "../features/components/Header/header";
import Home from "../features/components/Home/Home";
import React from "react";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <TitlePage title={'Administración Tribunales Competentes'}/>
      <Home />
    </div>
)}

export default Layout;
