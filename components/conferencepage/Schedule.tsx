import React, { FC } from "react";
import Typography from "../shared/Typography";

const Schedule: FC = () => {
  return Array(2)
    .fill(0)
    .map((_, i) => (
      <div className="bg-fifth rounded-md p-4" key={i}>
        <div className="flex justify-between">
          <Typography.H3 bold>February 11, 2014</Typography.H3>
          <Typography.H6>
            <p className="text-seventh mt-2">Wednesday</p>
          </Typography.H6>
        </div>
        <div className="mt-4">
          <Typography.H6>
            <span className="text-seventh">Duration : 05:00-06:00</span>
          </Typography.H6>
          <ul className="ml-8 mb-2 list-disc text-seventh">
            <li className="">
              <Typography.H6>
                <span className="text-seventh">Registration</span>
              </Typography.H6>
            </li>
          </ul>
          <Typography.H6>
            <span className="text-seventh">Duration : 05:00-06:00</span>
          </Typography.H6>
          <ul className="ml-8 mb-2  list-disc text-seventh">
            <li className="">
              <Typography.H6>
                <span className="text-seventh">Registration</span>
              </Typography.H6>
            </li>
          </ul>
        </div>
      </div>
    ));
};

export default Schedule;
