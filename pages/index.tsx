import Conferences from "@/components/homepage/ConferencesSection";
import HeroSection from "@/components/homepage/HeroSection";
import Sponsor from "@/components/homepage/SponsorSection";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>React Conference</title>
        <meta name="description" content="React Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Conferences />
      <Sponsor />
    </section>
  );
};
export default Home;
