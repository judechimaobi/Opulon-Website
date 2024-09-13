import React from "react";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <img
        className="person-wearing-futuristic-virt-icon"
        alt=""
        src="./images/bg-image.png"
      />
      <header className="logo-05-1-parent">
        <img
          className="logo-05-1-icon"
          loading="lazy"
          alt=""
          src="./images/logo.png"
        />
      </header>
      <div className="frame-wrapper">
        <div className="opulon-parent">
          <h1 className="opulon">opulon</h1>
          <div className="frame-child" />
        </div>
      </div>
      <FrameComponent />
      <FrameComponent1 />
    </div>
  );
};

export default ComingSoon;
