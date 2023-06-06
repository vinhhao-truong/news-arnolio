"use client";

import { RootState } from "../store";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialGeo = {
  country: "",
};

const geoSlice = createSlice({
  name: "geo",
  initialState: initialGeo,
  reducers: {
    updateCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export default geoSlice.reducer;
export const { updateCountry } = geoSlice.actions;
export const geoSelector = (state: RootState) => state.geo;
