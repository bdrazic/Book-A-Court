import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";

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
    <Card>
      <h2 style={{margin:"5px", padding:"0"}}>PULA</h2>
      <p style={{margin:"0", padding:"0", fontWeight:"bold"}}>{temperature}°C</p>
      <p style={{margin:"0", padding:"0", fontWeight:"bold"}}>{weather}</p>
    </Card>
  );
}
