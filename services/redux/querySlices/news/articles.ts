"use client";

import News from "@/lib/interfaces/News";
import { newsApi } from "../newsApi";

interface Headlines {
  total: number;
  data: News[];
}
const articlesApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getTopHeadlines: build.query({
      query: ({ keyword, category, page = 1, country }) => {
        return {
          url: "/article/getArticles",
          method: "POST",
          body: {
            query: `{"$query":{"$and":[{"keyword":"news","keywordLoc":"body"}${
              category ? `,{"keyword":"${category}","keywordLoc":"body"}` : ""
            }${
              keyword ? `,{"keyword":"${keyword}","keywordLoc":"body"}` : ""
            },{"conceptUri":"http://en.wikipedia.org/wiki/${
              country || "Australia"
            }"},{\"lang\":\"eng\"}]},"$filter":{"forceMaxDataTimeWindow":"31"}}`,
            resultType: "articles",
            articlesSortBy: "date",
            articlesCount: 20,
            includeArticleEventUri: false,
            articleBodyLen: -1,
            apiKey: process.env.newsApiKey,
            articlesPage: page,
          },
        };
      },
      merge: (currentCache, newNews) => {
        currentCache.data.push(
          //@ts-ignore
          newNews?.articles?.results.map((news) => ({
            ...news,
            source: news?.source?.title,
          }))
        );
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
      providesTags: () => [],
      transformResponse: (res): Headlines => {
        return {
          //@ts-ignore
          total: res?.articles?.totalResults,
          //@ts-ignore
          data: res?.articles?.results?.map((news) => {
            return { ...news, source: news?.source?.title };
          }),
        };
      },
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = articlesApi;
