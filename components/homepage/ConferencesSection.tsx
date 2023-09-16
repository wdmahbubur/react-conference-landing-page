import { FC } from "react";
import Typography from "../shared/Typography";
import TimelineItemLeft from "./TimelineItemLeft";
import TimelineItemRight from "./TimelineItemRight";

const Conferences: FC = () => {
  return (
    <section className="py-20 px-50 mobile:mt-18">
      <div className="text-center">
        <Typography.H2>Conferences</Typography.H2>
      </div>
      <div className="w-2/3 mobile:w-full mx-auto mt-6 mobile:mt-10 mobile:px-10">
        <div className="relative">
          <TimelineItemLeft active={true} />
          <TimelineItemRight />
          <TimelineItemLeft />
          <TimelineItemRight />
          <TimelineItemLeft lastElement={true} />
        </div>
      </div>
    </section>
  );
};

export default Conferences;
