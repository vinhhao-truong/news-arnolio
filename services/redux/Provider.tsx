"use client";

import ReactProps from "@/app/lib/interfaces/ReactProp";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { newsStore } from "./store";

const Provider: React.FC<ReactProps> = ({ children }) => {
  return <ReduxProvider store={newsStore}>{children}</ReduxProvider>;
};

export default Provider;
