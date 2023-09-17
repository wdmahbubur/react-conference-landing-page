import OrganizersProfile from "@/components/conferencepage/OrganizersProfile";
import Schedule from "@/components/conferencepage/Schedule";
import SideBarMenu from "@/components/conferencepage/SideBarMenu";
import SpeakersProfile from "@/components/conferencepage/SpeakersProfile";
import Sponsor from "@/components/conferencepage/Sponsor";
import Typography from "@/components/shared/Typography";
import { GET_CONFERENCE } from "@/graphql/services/conference.service";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Conference: NextPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<String>("organizer");
  const { conferenceID } = useRouter().query;

  const { loading, error, data } = useQuery(GET_CONFERENCE, {
    variables: { conferenceID },
  });

  return (
    <section className="py-48 px-32 mobile:pt-32 mobile:pb-20 mobile:px-6">
      <Head>
        <title>Conference Name | React Conference</title>
      </Head>
      {loading ? (
        <div>
          <div className="bg-sixth bg-opacity-20 h-14 rounded-lg w-96 mb-4 animate-pulse"></div>
          <div className="bg-sixth bg-opacity-20 h-3 rounded-lg w-48 mb-4 animate-pulse"></div>
          <div className="bg-sixth bg-opacity-20 h-3 rounded-lg w-48 mb-4 animate-pulse"></div>
          <div className="bg-sixth bg-opacity-20 h-3 rounded-lg w-48 mb-4 animate-pulse"></div>
        </div>
      ) : (
        <div>
          <Typography.H2>
            <span className="text-secondary">{data?.conference?.name}</span>
          </Typography.H2>
          <Typography.H5>
            <p className="text-seventh mt-2">{data?.conference?.slogan}</p>
          </Typography.H5>
          <div className="grid grid-cols-3 mobile:grid-cols-1 pt-10 gap-6">
            <div className="w-11/12 mobile:w-full">
              <SideBarMenu
                setSelectedMenu={setSelectedMenu}
                selectedMenu={selectedMenu}
                conference={data?.conference}
              />
            </div>
            <div className="col-span-2 bg-fourth w-full p-8 rounded-lg flex flex-col gap-6 mobile:hidden">
              {selectedMenu == "organizer" && (
                <OrganizersProfile organizer={data?.conference?.organizer} />
              )}
              {selectedMenu == "speakers" && (
                <SpeakersProfile speakers={data?.conference?.speakers} />
              )}
              {selectedMenu == "schedule" && (
                <Schedule schedules={data?.conference?.schedules} />
              )}
              {selectedMenu == "sponsors" && (
                <Sponsor sponsors={data?.conference?.sponsors} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Conference;
