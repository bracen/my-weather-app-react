import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <small>
        <a
          href="https://github.com/bracen/my-weather-app-react"
          rel="noreferrer"
          target="_blank"
        >
          Open-sourced code
        </a>{" "}
        by Nina Bracen
      </small>
    </div>
  );
}
