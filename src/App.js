import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export default function App() {
  const key = "c4f3e1e12433646010651b0c284bd2c6";
  const url = "https://api.openweathermap.org/data/2.5/weather?";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(0);
  // const []

  const getWeather = async () => {
    let response = await fetch(`${url}q=${city}&units=metric&appid=${key}`);
    response = await response.json();
    setWeather(response.main.temp);
    setCity("");
  };

  return (
    <div className="weatherApp">
      <main className="input">
        <input
          placeholder="Enter your city..."
          type="text"
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <div>
          <button onClick={getWeather}>Check Weather</button>
        </div>
        {weather ? (
          <>
            <h2>
              {weather}
              <sup>
                0<span>C|F</span>
              </sup>
            </h2>
          </>
        ) : null}
      </main>
    </div>
  );
}
