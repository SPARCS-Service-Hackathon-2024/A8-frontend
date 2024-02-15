import React, { useState } from "react";
import "./Transport.css";

const Transport = () => {
  const [fromStation] = useState("한빛아파트");
  const [toStation] = useState("유성고속터미널");
  const [transitOptions, setTransitOptions] = useState([
    { line: "특구 1 버스", duration: "30분 소요" },
    { line: "121 버스", duration: "38분 소요" },
  ]);

  return (
    <div className="transport">
      <div className="location-box">
        <div className="station-info">
          <div className="station-info-item from-station">
            <span className="station-info-label">From:</span>
            <span className="station-info-content">{fromStation}</span>
          </div>{" "}
          {}
          <div className="horizontal-line"></div>
          <div className="station-info-item to-station">
            <span className="station-info-label">To:</span>
            <span className="station-info-content">{toStation}</span>
          </div>
        </div>
      </div>
      <div className="transit-list-container">
        {transitOptions.map((option, index) => (
          <div className="transit-option" key={index}>
            <div className="transit-line">
              <span className="line-icon">🚌</span> {}
              <span className="line-name">{option.line}</span>
            </div>
            <div className="transit-time">
              <span className="duration">{option.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
