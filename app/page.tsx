import Conferences from "@/components/homepage/ConferencesSection";
import HeroSection from "@/components/homepage/HeroSection";
import Sponsor from "@/components/homepage/SponsorSection";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Conferences />
      <Sponsor />
    </section>
  );
}
