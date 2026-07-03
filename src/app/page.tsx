import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Audience from "@/components/Audience";
import WhyMo7y from "@/components/WhyMo7y";
import Journey from "@/components/Journey";
import StudioBanner from "@/components/StudioBanner";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Stats />
      <Services />
      <Audience />
      <WhyMo7y />
      <Journey />
      <StudioBanner />
      <CtaSection />
    </>
  );
}
