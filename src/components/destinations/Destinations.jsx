import React from "react";
import "./Destinations.css";
import data from "./data";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All Inclusive All Hidden Destinations</h1>
        <p>Beaches,Shores</p>
        <div className="img-container">
          {data.map((destination) => {
            return (
              <img
                key={destination.id}
                src={destination.img}
                alt="/"
                className={destination.className}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
