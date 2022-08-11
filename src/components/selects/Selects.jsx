import React from "react";
import "./Selects.css";
import data from "./data";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        {data.map((locations) => {
          return (
            <div className="selects-location" key={locations.id}>
              <img src={locations.img} alt="/" />
              <div className="overlay">
                <p>{locations.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Selects;
