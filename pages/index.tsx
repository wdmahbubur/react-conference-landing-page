import Conferences from "@/components/homepage/ConferencesSection";
import HeroSection from "@/components/homepage/HeroSection";
import Sponsor from "@/components/homepage/SponsorSection";
import { GET_CONFERENCES } from "@/graphql/services/conferences.service";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_CONFERENCES);
  return (
    <section>
      <Head>
        <title>React Conference</title>
        <meta name="description" content="React Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Conferences conferences={data?.conferences} loading={loading} />
      <Sponsor />
    </section>
  );
};
export default Home;
