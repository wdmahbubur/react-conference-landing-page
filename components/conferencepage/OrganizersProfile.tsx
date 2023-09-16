import Image from "next/image";
import React, { FC } from "react";
import Typography from "../shared/Typography";

const OrganizersProfile: FC = () => {
  return Array(3)
    .fill(0)
    .map((_, i) => (
      <div
        className="bg-fifth rounded-md p-4 flex gap-7 mobile:gap-3 items-center mobile:items-start"
        key={i}
      >
        <Image
          src="/Rectangle 215.png"
          alt=""
          width={140}
          height={140}
          className="mobile:h-24 mobile:w-24"
        />
        <div>
          <Typography.H3 bold>
            <span className="mobile:text-base">Siddhartha</span>
          </Typography.H3>
          <Typography.H6>
            <span className="text-seventh block mt-3 mobile:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              condimentum lectus in vel pellentesque arcu non odio. Ut dis eu
              dolor ac tellus vitae ut.
            </span>
          </Typography.H6>
        </div>
      </div>
    ));
};

export default OrganizersProfile;
