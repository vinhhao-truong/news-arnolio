"use client";

import News from "@/lib/interfaces/News";
import ReactProps from "@/lib/interfaces/ReactProp";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { getClasses } from "@/lib/utils/get/getProps";
import { truncate } from "@/lib/utils/format/formatString";
import getRandomImg from "@/lib/utils/get/getRandomImg";

interface NewsProps extends ReactProps {
  news: News;
  noImg?: boolean;
  desLimit?: number;
}
const News: React.FC<NewsProps> = ({ news, className, noImg, desLimit }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const MotionImage = motion(Image);

  const isImgShowed = !noImg;

  return (
    <article
      className={`${getClasses(
        className
      )} py-2 leading-loose hover:bg-gray-50 rounded-md h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      key={news.title}
    >
      <a
        className="flex flex-col justify-between h-full"
        href={news.url}
        target="_blank"
      >
        <h1 className="text-2xl font-semibold">{news.title}</h1>
        <div
          className={`grid ${
            isImgShowed ? "grid-cols-3" : "grid-cols-2"
          } gap-2`}
        >
          {isImgShowed && (
            <picture className="w-full overflow-hidden max-h-[200px]">
              {/* <MotionImage
                src={news.image || getRandomImg(news.title || "a")}
                alt={news.title || "news-img"}
                width={256}
                height={370}
                className="object-cover"
                animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
              /> */}
              <motion.img
                src={news.image || getRandomImg(news.title || "a")}
                alt={"news-img"}
                className="object-contain w-full"
                animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
              />
            </picture>
          )}
          <section className="col-span-2">
            <h2 className="leading-snug">
              {truncate(news.body, true, desLimit || 80)}
            </h2>
            <h3 className="italic text-right">{news.source}</h3>
            <h3 className="text-sm text-right text-gray-500">
              {moment(news.dateTime).fromNow()}
            </h3>
          </section>
        </div>
      </a>
    </article>
  );
};

export default News;
