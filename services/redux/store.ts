"use client";

import { newsApi } from "./querySlices/newsApi";
import { configureStore } from "@reduxjs/toolkit";
import geoSlice from "./appSlices/geoSlice";

export const newsStore = configureStore({
  reducer: {
    geo: geoSlice,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof newsStore.getState>;
