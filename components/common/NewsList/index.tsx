"use client";

import NewsType from "@/lib/interfaces/News";
import ReactProps from "@/lib/interfaces/ReactProp";
import { capitaliseFirst } from "@/lib/utils/format/formatString";
import { useGetTopHeadlinesQuery } from "@/services/redux/querySlices/news/topHeadlines";
import React from "react";
import Loader from "../Loader";
import News from "../News";
import TopNews from "../TopNews";

const dummyNewsList: NewsType[] = [
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title:
      "From teachers to waiters: The industries that haven't bounced back from the pandemic - CNN",
    description:
      "Economists have been closely watching monthly job reports for signs of cracks in the labor market that offer clues on when a recession could start. But their predictions have been tested month after month with stronger-than-expected gains.",
    url: "https://www.cnn.com/2023/06/03/business/us-job-gains-may/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230601141252-us-pandemic-job-losses-hospitality-waiters.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-06-04T00:56:00Z",
    content:
      "Economists have been closely watching monthly US job reports for signs of cracks in the labor market that could offer clues as to when a recession could start. But their predictions have been tested … [+3079 chars]",
  },
];

interface NewsListProps extends ReactProps {
  category?: string | null;
  keyword?: string | null;
}
const NewsList: React.FC<NewsListProps> = ({ category, keyword }) => {
  const {
    data: headlines,
    isLoading,
    isFetching,
    isError,
  } = useGetTopHeadlinesQuery({
    category,
    keyword,
  });

  const newsList = headlines?.data;

  const isAllLoading = isLoading || isFetching;

  if (isError) {
    return <div className="">Error</div>;
  }

  return newsList && !isAllLoading && newsList?.length > 0 ? (
    <>
      {/* md -> large */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b">
          <TopNews news={newsList[0]} />
          <ul className="">
            {newsList.slice(1, 3).map((news, idx) => {
              return (
                <li key={`news-${idx}`}>
                  <News news={news} noImg isDesLong />
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
                <News news={news} />
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
    </>
  ) : isAllLoading ? (
    <div className="flex flex-col items-center gap-6">
      <Loader type="Spin Stretch" color="#023e8a" />
      <h1 className="text-system=blue">
        getting{category && ` "${capitaliseFirst(category)}"`}
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
