import Image from "next/image";
import { FC } from "react";
import Typography from "../shared/Typography";

const HeroSection: FC = () => {
  return (
    <section className="flex flex-wrap max-w-[1535px] mx-auto px-16 mobile:px-6 tablet:px-20 items-end pt-52 mobile:pt-32 pb-20 tablet:pb-14 tablet:gap-10 relative bg-[url('/landing-bg.png')] bg-no-repeat mobile:bg-cover mobile:pb-60">
      <div className=" w-2/3 pr-10 relative tablet:pr-0 tablet:w-full">
        <Image
          src="/hero-bg-line.png"
          alt=""
          className="absolute hero-section-bg-line mobile:hidden"
          height={700}
          width={750}
        />
        <Image
          src="/hero-bg-line-sm.png"
          alt=""
          className="absolute hero-section-bg-line sm:hidden"
          height={700}
          width={750}
        />
        <div className="text-right relative mobile:mr-16">
          <Typography.H1>
            <span className="relative before:absolute before:-top-8 before:-z-10 before:-left-12 tablet:before:-top-10 tablet:before:-left-14 before:w-full before:bg-[url('/crown-vector.png')] before:h-full before:bg-no-repeat mobile:before:-left-5 mobile:before:-top-3 mobile:before:bg-contain">
              R
            </span>
            <span>eact </span>
            <br />
            <span>Conference</span>
          </Typography.H1>
        </div>

        <div className="flex gap-10 tablet:gap-7 mt-5">
          <div className="relative w-1/3 after:absolute after:-bottom-1/4 after:-right-1/3 after:-z-10 after:h-full after:w-full after:bg-[url('/ornament.jpg')] after:bg-no-repeat after:bg-right-bottom mobile:absolute mobile:-bottom-[650px] mobile:after:hidden mobile:after:-top-4 mobile:after:-right-[320px] mobile:after:rotate-[150deg]">
            <Image src="/hero-02.png" alt="" height={420} width={330} />
          </div>
          <div className="w-2/3 px-6 mobile:px-0 tablet:w-full mobile:mt-6">
            <Typography.H4>
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
              id fermentum..id fermentum.In quis diam turpis quam id fermentum.
              fermentum.
            </Typography.H4>
            <button className="py-3 bg-primary rounded-3xl px-6 w-72 mobile:w-44 mt-10 flex items-center gap-2 justify-center tablet:mx-auto">
              Buy Tickets
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5001 3.125C17.5001 2.95924 17.4343 2.80027 17.3171 2.68306C17.1999 2.56585 17.0409 2.5 16.8751 2.5H9.37512C9.20936 2.5 9.05039 2.56585 8.93318 2.68306C8.81597 2.80027 8.75012 2.95924 8.75012 3.125C8.75012 3.29076 8.81597 3.44973 8.93318 3.56694C9.05039 3.68415 9.20936 3.75 9.37512 3.75H15.3664L2.68262 16.4325C2.62451 16.4906 2.57841 16.5596 2.54696 16.6355C2.51552 16.7114 2.49933 16.7928 2.49933 16.875C2.49933 16.9572 2.51552 17.0386 2.54696 17.1145C2.57841 17.1904 2.62451 17.2594 2.68262 17.3175C2.74073 17.3756 2.80971 17.4217 2.88564 17.4532C2.96156 17.4846 3.04294 17.5008 3.12512 17.5008C3.2073 17.5008 3.28867 17.4846 3.3646 17.4532C3.44052 17.4217 3.50951 17.3756 3.56762 17.3175L16.2501 4.63375V10.625C16.2501 10.7908 16.316 10.9497 16.4332 11.0669C16.5504 11.1842 16.7094 11.25 16.8751 11.25C17.0409 11.25 17.1999 11.1842 17.3171 11.0669C17.4343 10.9497 17.5001 10.7908 17.5001 10.625V3.125Z"
                  fill="#0A142F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/3 tablet:w-full">
        <div className="relative after:absolute after:-bottom-16 after:-left-16 mobile:after:left-72 mobile:after:-bottom-12 mobile:after:w-[90px] mobile:after:h-[90px] mobile:after:bg-contain after:w-[130px] after:h-[130px] after:bg-[url('/Star.png')] after:bg-no-repeat after:bg-left-bottom h-[400px] tablet:w-[80%] tablet:mx-auto mobile:w-full mobile:h-[370px]">
          <Image src="/hero-01.png" alt="hero-image" fill />
        </div>
      </div>
      <div className="absolute bottom-24 left-1/2 cursor-pointer mobile:hidden">
        <span className="absolute -rotate-90 w-full whitespace-nowrap">
          Scroll Down
        </span>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-360 absolute top-4 -left-2"
        >
          <path
            d="M0.0316157 0.938778L8.31383 15.284L16.596 0.938778L15.5706 0.938777L8.31383 13.5079L1.05704 0.938777L0.0316157 0.938778Z"
            fill="#0A142F"
          />
          <path
            d="M2.26397 0.938778L8.31383 11.4174L14.3637 0.938777L2.26397 0.938778Z"
            fill="#0A142F"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
