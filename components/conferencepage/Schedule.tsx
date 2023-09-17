import React, { FC } from "react";
import Typography from "../shared/Typography";
import formatDate from "@/utils/formatDate";

interface CProps {
  schedules: [];
}

interface InSchedule {
  day: string;
  intervals?: [];
}

interface InInterval {
  begin?: string;
  end?: string;
  title?: string;
}

const Schedule: FC<CProps> = ({ schedules }) => {
  return schedules?.length ? (
    schedules?.map((schedule: InSchedule, i: number) => (
      <div className="bg-fifth rounded-md p-4" key={i}>
        <div className="flex justify-between">
          <Typography.H3 bold>{formatDate(schedule.day)}</Typography.H3>
          <Typography.H6>
            <p className="text-seventh mt-2">
              {new Date(schedule.day).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
          </Typography.H6>
        </div>
        <div className="mt-4">
          {schedule.intervals?.map((interval: InInterval, i: number) => (
            <>
              <Typography.H6>
                <span className="text-seventh">
                  Duration : {interval.begin}-{interval.end}
                </span>
              </Typography.H6>
              <ul className="ml-8 mb-2 list-disc text-seventh">
                <li className="">
                  <Typography.H6>
                    <span className="text-seventh">{interval.title}</span>
                  </Typography.H6>
                </li>
              </ul>
            </>
          ))}
        </div>
      </div>
    ))
  ) : (
    <div className="bg-fifth rounded-md p-4">
      <Typography.H3 bold>
        <span className="text-seventh">No Schedule Available</span>
      </Typography.H3>
    </div>
  );
};

export default Schedule;
