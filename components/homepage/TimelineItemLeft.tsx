import React, { FC } from "react";
import Typography from "../shared/Typography";

interface CProps {
  active?: Boolean;
  lastElement?: Boolean;
}

const TimelineItemLeft: FC<CProps> = ({ active, lastElement }) => {
  return (
    <div className="w-full flex">
      <div
        className={`w-1/2 mobile:w-full border-r mobile:border-l mobile:border-r-0 pr-16 h-40 relative mobile:pr-0 mobile:pl-10 ${
          active ? "border-primary" : "border-sixth"
        } ${lastElement && "border-none"}`}
      >
        <div className="text-seventh mb-1 mobile:block laptop:hidden desktop:hidden mac:hidden">
          <Typography.H6>02 September, 2023</Typography.H6>
        </div>
        <div className="rounded-md bg-fourth h-24 px-3 py-4 shadow-[0px_-4px_0px_-2px_#CDCDCD] hover:shadow-[0px_-4px_0px_-2px_#FFC93E] drop-shadow-md cursor-pointer hover:drop-shadow-2xl transition-all duration-200">
          <div className="flex gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="#FFC93E" />
                <circle cx="8" cy="8" r="3" fill="white" />
              </svg>
            </div>
            <div>
              <Typography.H4 bold>
                <span className="text-secondary">Freezing Edge 2023</span>
              </Typography.H4>
              <div className="mt-3">
                <Typography.H6>
                  <span className="text-seventh">
                    The edge isn&apos;t bleeding, it&apos;s freezing!
                  </span>
                </Typography.H6>
              </div>
            </div>
          </div>
        </div>
        <div className="ring-8 ring-fifth bg-fifth h-8 w-8 rounded-full absolute top-0 -right-4 mobile:right-0 mobile:-left-4 flex justify-center items-center">
          <div
            className={`ring-1 h-8 w-8 rounded-full p-1 flex justify-center items-center ${
              active ? "ring-primary" : "ring-sixth"
            } ${active ? "bg-[#FFF9EB]" : "bg-fifth"}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clipPath="url(#clip0_4320_4947)">
                <path
                  d="M19.9023 10.2969L9.938 23.7969C9.8915 23.8599 9.83087 23.911 9.76099 23.9463C9.69111 23.9816 9.61393 24 9.53565 24C9.46974 24.0002 9.40447 23.9871 9.34375 23.9614C9.24043 23.9187 9.15447 23.8424 9.09966 23.7449C9.04485 23.6474 9.02437 23.5344 9.0415 23.4238L10.417 14.5H4.5C4.40748 14.5 4.31677 14.4743 4.23797 14.4258C4.15917 14.3774 4.09536 14.308 4.05366 14.2254C4.01196 14.1428 3.99399 14.0502 4.00176 13.958C4.00952 13.8658 4.04272 13.7776 4.09765 13.7031L14.062 0.203148C14.1284 0.113176 14.223 0.0480537 14.3308 0.0181852C14.4385 -0.0116833 14.5532 -0.00457371 14.6564 0.038378C14.7596 0.0813297 14.8455 0.157645 14.9003 0.255128C14.955 0.352612 14.9755 0.465639 14.9585 0.576148L13.583 9.5H19.5C19.5925 9.49999 19.6832 9.52566 19.7621 9.57415C19.8409 9.62264 19.9047 9.69205 19.9464 9.77465C19.9881 9.85725 20.006 9.9498 19.9983 10.042C19.9905 10.1342 19.9573 10.2224 19.9023 10.2969Z"
                  fill={`${active ? "#FFC93E" : "#CDCDCD"}`}
                />
              </g>
              <defs>
                <clipPath id="clip0_4320_4947">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-16 py-3 text-seventh mobile:hidden">
        <Typography.H6>02 September, 2023</Typography.H6>
      </div>
    </div>
  );
};

export default TimelineItemLeft;
