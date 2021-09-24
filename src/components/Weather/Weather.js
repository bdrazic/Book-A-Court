import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTwo from "../UI/CardTwo";

export default function Weather() {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Pula&appid=1a232b6a47ab4369cdc1afc7c429aead&units=metric`
      );
      setWeather(res.data.weather[0].main);
      setTemperature(res.data.main.temp);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        padding: "0",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:"0 0 2px black"
      }}
    >
      <h2 style={{ margin: "5px", padding: "0" }}>PULA</h2>
      <h2 style={{ margin: "0", paddingLeft: "50px"}}>
        {temperature}°C
      </h2><br /><br /><br />
      <h2 style={{ margin: "0", paddingLeft: "50px"}}>{weather}</h2>
    </div>
  );
}
