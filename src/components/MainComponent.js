// MainComponent.js
import React, { useEffect, useState } from "react";
import Map from "react-map-gl";
import "../styles.css";

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="bg-image">
        <div className="navigation">
          <header>
            <nav class="navbar">
              <ul class="nav-list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div
          className="container"
          content="width=device-width, initial-scale=1.0"
        >
          <Map
            mapboxAccessToken="pk.eyJ1IjoidW11dG5hZGVyaSIsImEiOiJjbHJhemo2ZTAwaTB1MmpueHUwajY5eXdoIn0.9Qcb2uyV9nLub1eo0wcP5w"
            initialViewState={{
              longitude: 0.12,
              latitude: 0.12,
              zoom: 2,
              projection: "mercator",
            }}
            mapStyle="mapbox://styles/umutnaderi/clrbpuyec005d01pfh4gu9bn3"
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
