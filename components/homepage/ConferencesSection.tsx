import { FC } from "react";
import Typography from "../shared/Typography";
import TimelineItemLeft from "./TimelineItemLeft";
import TimelineItemRight from "./TimelineItemRight";
import TimelineItemLeftLoading from "./TimelineItemLeftLoading";
import TimelineItemRightLoading from "./TimelineItemRightLoading";

interface CProps {
  conferences: [];
  loading?: boolean;
}

interface InConference {
  id: string;
  name: string;
  slogan: string;
  startDate: string;
  endDate: string;
  schedules: [];
}

const Conferences: FC<CProps> = ({ conferences, loading }) => {
  return (
    <section className="py-20 px-50 mobile:mt-18" id="conferenceTimeline">
      <div className="text-center">
        <Typography.H2>Conferences</Typography.H2>
      </div>
      <div className="w-2/3 mobile:w-full mx-auto mt-10 mobile:mt-10 mobile:px-10">
        <div className="relative">
          {loading && (
            <div>
              <TimelineItemLeftLoading />
              <TimelineItemRightLoading />
              <TimelineItemLeftLoading />
              <TimelineItemRightLoading />
            </div>
          )}
          {!loading &&
            conferences?.length > 0 &&
            conferences?.map((conference: InConference, index: number) => {
              if (index % 2 === 0) {
                return (
                  <TimelineItemLeft
                    key={index}
                    id={conference.id}
                    active={index === 0}
                    name={conference.name}
                    slogan={conference.slogan}
                    date={conference.startDate}
                    lastElement={index === conferences.length - 1}
                  />
                );
              } else {
                return (
                  <TimelineItemRight
                    key={index}
                    id={conference.id}
                    name={conference.name}
                    slogan={conference.slogan}
                    date={conference.startDate}
                    lastElement={index === conferences.length - 1}
                  />
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
