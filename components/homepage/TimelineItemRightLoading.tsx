import React, { FC } from "react";
import Typography from "../shared/Typography";
import formatDate from "@/utils/formatDate";

const TimelineItemRightLoading: FC = () => {
  return (
    <div className="w-full flex animate-pulse bg-gray-300">
      <div className={`w-1/2 mobile:hidden pr-16 relative py-3`}></div>
      <div className={`w-1/2 mobile:w-full pl-16 mobile:pl-10 mobile:relative`}>
        <div className="rounded-md bg-fourth h-24 px-3 py-4"></div>
      </div>
    </div>
  );
};

export default TimelineItemRightLoading;
