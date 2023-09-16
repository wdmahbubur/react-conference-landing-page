import OrganizersProfile from "@/components/conferencepage/OrganizersProfile";
import Schedule from "@/components/conferencepage/Schedule";
import SideBarMenu from "@/components/conferencepage/SideBarMenu";
import SpeakersProfile from "@/components/conferencepage/SpeakersProfile";
import Sponsor from "@/components/conferencepage/Sponsor";
import Typography from "@/components/shared/Typography";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Conference: NextPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<String>("organizer");

  return (
    <section className="py-48 px-32 mobile:pt-32 mobile:pb-20 mobile:px-6">
      <Head>
        <title>Conference Name | React Conference</title>
      </Head>
      <Typography.H2>
        <span className="text-secondary">Conference Name</span>
      </Typography.H2>
      <Typography.H5>
        <p className="text-seventh">
          Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
          fermentum.
        </p>
      </Typography.H5>
      <div className="grid grid-cols-3 mobile:grid-cols-1 pt-10 gap-6">
        <div className="w-11/12 mobile:w-full">
          <SideBarMenu
            setSelectedMenu={setSelectedMenu}
            selectedMenu={selectedMenu}
          />
        </div>
        <div className="col-span-2 bg-fourth w-full p-8 rounded-lg flex flex-col gap-6 mobile:hidden">
          {selectedMenu == "organizer" && <OrganizersProfile />}
          {selectedMenu == "speakers" && <SpeakersProfile />}
          {selectedMenu == "schedule" && <Schedule />}
          {selectedMenu == "sponsors" && <Sponsor />}
        </div>
      </div>
    </section>
  );
};

export default Conference;
