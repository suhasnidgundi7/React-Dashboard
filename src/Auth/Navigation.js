import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";

const Navigation = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
    </HashRouter>
  );
};

export default Navigation;
