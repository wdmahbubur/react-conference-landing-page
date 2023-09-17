import Image from "next/image";
import React, { FC } from "react";
import Typography from "../shared/Typography";

interface InOrganizer {
  name?: string;
  about?: string;
  image: {
    url: string;
  };
}
interface CProps {
  organizer: InOrganizer;
}

const OrganizersProfile: FC<CProps> = ({ organizer }) => {
  return (
    <div className="bg-fifth rounded-md p-4 flex gap-7 mobile:gap-3 items-center mobile:items-start">
      <Image
        src={organizer?.image?.url || "/Rectangle 215.png"}
        alt=""
        width={140}
        height={140}
        className="mobile:h-24 mobile:w-24"
      />
      <div>
        <Typography.H3 bold>
          <span className="mobile:text-base">{organizer?.name}</span>
        </Typography.H3>
        <Typography.H6>
          <span className="text-seventh block mt-3 mobile:mt-2">
            {organizer?.about}
          </span>
        </Typography.H6>
      </div>
    </div>
  );
};

export default OrganizersProfile;
