"use client";

import useGetGeo from "@/app/hooks/useGetGeo";
import useGetWeather from "@/app/hooks/useGetWeather";
import React, { useEffect } from "react";

const Navigation = () => {
  const weather = useGetWeather();

  return (
    <header className="">
      <div className="">
        <h1 className="">arnolio-news</h1>
        <div className="">
          {typeof weather === "string" ? (
            weather
          ) : (
            <>
              <h2>{weather.temp}</h2>
              <h3>{weather.description}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather-icon"
              />
            </>
          )}
        </div>
      </div>
      <nav className=""></nav>
    </header>
  );
};

export default Navigation;
