"use client";

import useGetGeo from "@/app/hooks/useGetGeo";
import useGetWeather from "@/app/hooks/useGetWeather";
import { capitaliseFirst } from "@/app/lib/utils/format/formatString";
import Link from "next/link";
import React, { useEffect } from "react";
import Loader from "../common/Loader";

const categories: string[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Navigation = () => {
  const weather = useGetWeather();

  return (
    <header className="">
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="">
          ARNOLIO-NEWS
        </Link>

        <div className="flex items-center gap-4">
          {typeof weather === "string" ? (
            <Loader
              type="Three Waving Dots"
              color="#1ccccc"
              className="w-[50px]"
            />
          ) : (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt="weather-icon"
                width={48}
                height={48}
              />
              <h2>{weather.temp}&#x2103;</h2>
              <h3>{weather.description}</h3>
            </>
          )}
        </div>
      </div>
      <nav className="w-full text-white bg-black">
        <ul className="flex w-max">
          {categories.map((c, idx) => {
            return (
              <li className="px-4 py-2" key={`nav-category-${idx}`}>
                <Link href={`/${c}`}>{capitaliseFirst(c)}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
