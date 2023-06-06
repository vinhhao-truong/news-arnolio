"use client";

import NewsType from "@/lib/interfaces/News";
import ReactProps from "@/lib/interfaces/ReactProp";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
import { geoSelector } from "@/services/redux/appSlices/geoSlice";
import { useGetTopHeadlinesQuery } from "@/services/redux/querySlices/news/articles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import News from "../News";
import TopNews from "../TopNews";

interface NewsListProps extends ReactProps {
  category?: string | null;
  keyword?: string | null;
}
const NewsList: React.FC<NewsListProps> = ({ category, keyword }) => {
  const country = useSelector(geoSelector).country;
  const [page, setPage] = useState<number>(1);

  const {
    data: newsData,
    isLoading,
    isFetching,
    isError,
  } = useGetTopHeadlinesQuery(
    {
      category,
      keyword,
      country,
      page,
    },
    { skip: !country }
  );
  const [newsList, setNewsList] = useState<NewsType[]>([]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isFetching]);

  useEffect(() => {
    if (newsData) {
      setNewsList((prev) => [...prev, ...newsData.data]);
    }
  }, [newsData]);

  useEffect(() => {
    if (newsList.length > 0 && newsData) {
      console.log("length", newsList.length);
      console.log("total", newsData.total);
    }
  }, [newsList, newsData]);

  const isAllLoading = isLoading || isFetching;

  if (!country) {
    return (
      <div className="flex flex-col items-center gap-6">
        <Loader type="Spin Stretch" color="#023e8a" />
        <h1 className="text-system=blue">acquiring current country...</h1>
      </div>
    );
  }

  if (isError) {
    return <div className="">Error</div>;
  }

  return newsList && newsList?.length > 0 ? (
    <>
      {/* md -> large */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b">
          <TopNews news={newsList[0]} />
          <ul className="">
            {newsList.slice(1, 3).map((news, idx) => {
              return (
                <li key={`news-${idx}`}>
                  <News news={news} noImg desLimit={150} />
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b lg:grid-cols-3">
          {newsList.slice(3, 12).map((news, idx) => {
            return (
              <li key={`news-${idx}`}>
                <News news={news} />
              </li>
            );
          })}
        </ul>
        <ul className="grid grid-cols-1 gap-4 ">
          {newsList.slice(12).map((news, idx) => {
            return (
              <li key={`news-${idx}`}>
                <News news={news} desLimit={220} />
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile */}
      <div className="block md:hidden">
        <TopNews news={newsList[0]} />
        <ul className="grid gap-4 lg:grid-cols-3">
          {newsList.slice(1).map((news, idx) => {
            return (
              <li key={`news-${idx}`}>
                <News news={news} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-2 mt-8">
        {newsList.length === newsData.total ? (
          <p className="italic">You have reached the end of the page...</p>
        ) : (
          <>
            <Loader
              type="Three Fading Dots"
              className="w-[60px]"
              color="#023e8a"
            />
            <h1 className="text-system=blue">
              loading more{category && ` "${capitaliseFirst(category)}"`}
              {keyword && ` "${keyword}"`} news...
            </h1>
          </>
        )}
      </div>
    </>
  ) : isAllLoading ? (
    <div className="flex flex-col items-center gap-6">
      <Loader type="Spin Stretch" color="#023e8a" />
      <h1 className="text-system=blue">
        loading{category && ` "${capitaliseFirst(category)}"`}
        {keyword && ` "${keyword}"`} news...
      </h1>
    </div>
  ) : (
    <p className="text-center">
      No available news, please check another time...
    </p>
  );
};

export default NewsList;
