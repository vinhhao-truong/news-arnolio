import ReactProp from "@/app/lib/interfaces/ReactProp";
import { getClasses } from "@/app/lib/utils/get/getProps";
import React from "react";

const PageContainer: React.FC<ReactProp> = ({ children, className }) => {
  return <div className={`${getClasses(className)} px-4`}>{children}</div>;
};

export default PageContainer;
