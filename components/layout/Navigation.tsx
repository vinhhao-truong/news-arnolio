"use client";

import useGetGeo from "@/hooks/useGetGeo";
import useGetWeather from "@/hooks/useGetWeather";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
import { geoSelector } from "@/services/redux/appSlices/geoSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

const categories: string[] = [
  "business",
  "entertainment",
  "health",
  "science",
  "sport",
  "technology",
];

const Navigation = () => {
  const weather = useGetWeather();
  const country = useSelector(geoSelector).country;

  return (
    <header className="">
      <div className="flex justify-center">
        <div className="flex items-center justify-between px-2 md:px-4 min-[1440px]:px-0 w-full max-w-[1440px]">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <Image src="/favicon-32x32.png" alt="logo" width={32} height={32} />{" "}
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
                <img
                  src={`https://www.sciencekids.co.nz/images/pictures/flags680/${country}.jpg`}
                  alt="weather-icon"
                  width={48}
                  height={48}
                />
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
