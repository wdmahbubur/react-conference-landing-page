import Image from "next/image";
import React, { FC } from "react";
import Typography from "../shared/Typography";

interface CProps {
  sponsors: [];
}

interface InSponsor {
  name?: string;
  aboutShort?: string;
  image: {
    url: string;
  };
}

const Sponsor: FC<CProps> = ({ sponsors }) => {
  return sponsors?.length ? (
    sponsors?.map((sponsor: InSponsor, i: number) => (
      <div
        className="bg-fifth rounded-md p-4 flex gap-7 mobile:gap-3 items-center mobile:items-start"
        key={i}
      >
        <Image
          src={sponsor?.image?.url || "/Rectangle 215.png"}
          alt=""
          width={140}
          height={140}
          className="mobile:h-24 mobile:w-24"
        />
        <div>
          <Typography.H3 bold>
            <span className="mobile:text-base">{sponsor?.name}</span>
          </Typography.H3>
          <Typography.H6>
            <span className="text-seventh block mt-3 mobile:mt-2">
              {sponsor?.aboutShort}
            </span>
          </Typography.H6>
        </div>
      </div>
    ))
  ) : (
    <div className="bg-fifth rounded-md p-4">
      <Typography.H3 bold>
        <span className="text-seventh">No Sponsor Available</span>
      </Typography.H3>
    </div>
  );
};

export default Sponsor;
