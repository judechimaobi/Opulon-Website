import React from "react";
import "./FrameComponent.css";

export const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`coming-soon-container-wrapper ${className}`}>
      <div className="coming-soon-container">
        <h1 className="coming-soon1">COMING SOON</h1>
        <div className="coming-soon-container-inner">
          <div className="rectangle-parent">
            <div className="frame-item" />
            <div className="frame-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
