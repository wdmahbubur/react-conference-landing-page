import React, { FC } from "react";
import Typography from "../shared/Typography";

const TimelineItemLeftLoading: FC = () => {
  return (
    <div className="w-full flex animate-pulse bg-gray-300">
      <div
        className={`w-1/2 mobile:w-full pr-16 relative mobile:pr-0 mobile:pl-10`}
      >
        <div className="text-seventh mb-1 mobile:block laptop:hidden desktop:hidden mac:hidden"></div>
        <div className="rounded-md bg-fourth h-24 px-3 py-4 "></div>
      </div>
    </div>
  );
};

export default TimelineItemLeftLoading;
