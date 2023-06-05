import ReactProps from "@/lib/interfaces/ReactProp";
import { getClasses } from "@/lib/utils/get/getProps";
import React from "react";

const PageContainer: React.FC<ReactProps> = ({ children, className }) => {
  return (
    <div
      className={`${getClasses(
        className
      )} px-2 md:px-4 flex items-center justify-center`}
    >
      <div className="max-w-[1440px] w-full">{children}</div>
    </div>
  );
};

export default PageContainer;
