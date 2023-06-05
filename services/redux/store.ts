"use client";

import { newsApi } from "./querySlices/newsApi";
import { configureStore } from "@reduxjs/toolkit";

export const newsStore = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof newsStore.getState>;
