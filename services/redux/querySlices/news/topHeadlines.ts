"use client";

import News from "@/lib/interfaces/News";
import { newsApi } from "./../newsApi";

interface Headlines {
  total: number;
  data: News[];
}
const topHeadlinesApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getTopHeadlines: build.query({
      query: ({ keyword, category, page }) => {
        return {
          url: "/top-headlines",
          params: {
            country: "au",
            apiKey: process.env.newsApiKey,
            q: keyword,
            category,
            page,
          },
        };
      },
      providesTags: () => [],
      transformResponse: (res): Headlines => {
        return {
          //@ts-ignore
          total: res.totalResults,
          //@ts-ignore
          data: res.articles,
        };
      },
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = topHeadlinesApi;
