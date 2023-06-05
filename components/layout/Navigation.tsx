"use client";

import useGetGeo from "@/hooks/useGetGeo";
import useGetWeather from "@/hooks/useGetWeather";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
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
      <div className="flex justify-center">
        <div className="flex items-center justify-between px-2 md:px-4 min-[1440px]:px-0 w-full max-w-[1440px]">
          <Link href="/" className="">
            ARNOLIO-NEWS
          </Link>

          <div className="flex items-center h-12 gap-2 min-[480px]:gap-4">
            {typeof weather === "string" ? (
              <Loader
                type="Three Waving Dots"
                color="#023e8a"
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
                <h3 className="hidden min-[480px]:block">
                  {weather.description}
                </h3>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-black">
        <nav className="w-full overflow-x-auto text-white max-w-[1440px] px-2 md:px-4 min-[1440px]:px-0">
          <ul className="flex w-max">
            {categories.map((c, idx) => {
              return (
                <li className="py-2 pr-8" key={`nav-category-${idx}`}>
                  <Link className="hover:text-gray-100" href={`/${c}`}>
                    {capitaliseFirst(c)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;