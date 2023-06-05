"use client";

import TopNews from "@/lib/interfaces/News";
import ReactProps from "@/lib/interfaces/ReactProp";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { getClasses } from "@/lib/utils/get/getProps";
import { truncate } from "@/lib/utils/format/formatString";

interface NewsProps extends ReactProps {
  news: TopNews;
}
const TopNews: React.FC<NewsProps> = ({ news, className }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const MotionImage = motion(Image);

  return (
    <article
      className={`${getClasses(
        className
      )} py-2 leading-loose h-full overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={news.title}
    >
      <a href={news.url} className="h-full" target="_blank">
        <div className="relative flex flex-col justify-between h-full overflow-hidden">
          <h1 className="text-4xl font-semibold z-[1] bg-white/80 mb-52 md:mb-0">
            {news.title}
          </h1>
          <MotionImage
            src={
              news.urlToImage ||
              "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
            }
            alt={news.title || "news-img"}
            fill
            className="absolute z-0 object-cover"
            animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
          />

          <section className="col-span-2 z-[1] relative text-white flex justify-between items-center bg-black/80 px-1">
            {/* <h2 className="leading-snug">
              {truncate(news.description, true, 80)}
            </h2> */}
            <h3 className="italic">{news.author}</h3>
            <h3 className="text-sm text-gray-200">
              {moment(news.publishedAt).fromNow()}
            </h3>
          </section>
        </div>
      </a>
    </article>
  );
};

export default TopNews;
