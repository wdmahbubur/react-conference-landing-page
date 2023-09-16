import React, { FC } from "react";
import Typography from "../shared/Typography";
import Image from "next/image";

const Sponsor: FC = () => {
  return (
    <section className="py-16 px-60 mobile:px-0 bg-fourth text-center">
      <Typography.H2>Our Sponsor</Typography.H2>
      <div className="mt-4 text-seventh">
        <Typography.H6>🥇 Gold Sponsor</Typography.H6>
        <div className="flex justify-center my-4 gap-10">
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Layers.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Sisyphus.png"} alt="" fill />
          </div>
        </div>
      </div>
      <div className="mt-8 text-seventh ">
        <Typography.H6>🥈 Silver Sponsor</Typography.H6>
        <div className="flex justify-center my-4 gap-10 mobile:flex-wrap">
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Circooles.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Catalog.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32 mobile:flex-shrink">
            <Image src={"/Sponsor/GOFORE.png"} alt="" fill />
          </div>
        </div>
      </div>
      <div className="mt-8 text-seventh">
        <Typography.H6>🥉 Bronze Sponsor</Typography.H6>
        <div className="flex justify-center my-4 gap-10 mobile:flex-wrap">
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Sisyphus_2.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Qutient.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32 mobile:flex-shrink">
            <Image src={"/Sponsor/Layers.png"} alt="" fill />
          </div>
          <div className="relative h-14 w-48 mobile:h-10 mobile:w-32">
            <Image src={"/Sponsor/Circooles.png"} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
