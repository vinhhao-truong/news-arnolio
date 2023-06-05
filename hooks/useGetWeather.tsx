"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import useGetGeo from "./useGetGeo";

type WeatherString = "unavailable" | "loading";
interface Weather {
  description: string;
  icon: string;
  temp: string | number;
}
const useGetWeather = () => {
  const geo = useGetGeo();
  const [weather, setWeather] = useState<WeatherString | Weather>(
    "unavailable"
  );

  useEffect(() => {
    if (!!geo && typeof geo === "object") {
      const lat = geo.lat;
      const lon = geo.lon;

      (async () => {
        try {
          const API_KEY = process.env.weatherApiKey;
          setWeather("loading");
          const weatherRes = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          const weatherData = weatherRes.data;

          setWeather({
            description: weatherData.weather[0].main,
            temp: weatherData.main.temp,
            icon: weatherData.weather[0].icon,
          });
        } catch (err) {
          console.log(err);
          setWeather("unavailable");
        }
      })();
    }
  }, [geo]);

  return weather;
};

export default useGetWeather;
