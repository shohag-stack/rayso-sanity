import Ticker from "@/components/Ticker";
import Hero from "@/components/section/Hero";
import Stats from "@/components/section/Stats";
import Services from "@/components/section/Services";
import Niches from "@/components/section/Niches";
import Process from "@/components/section/Process";
import Templates from "@/components/section/Templates";
import Components from "@/components/section/Components";
import TrustBar from "@/components/section/TrustBar";
import CTABanner from "@/components/section/CTABanner";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Niches />
        <Process />
        <Templates />
        <Components />
        <TrustBar />
        <CTABanner />
      </main>
    </>
  );
}
