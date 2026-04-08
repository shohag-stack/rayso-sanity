import Link from "next/link";
import AboutHero from "@/components/section/AboutHero";
import AboutStats from "@/components/section/AboutStats";
import AboutPrinciple from "@/components/section/AboutPrinciple";
import AboutTeam from "@/components/section/AboutTeam";
import AboutFrustration from "@/components/section/AboutFrustration";
import CTABanner from "@/components/section/CTABanner";


export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutStats />
        <AboutPrinciple />
        <AboutTeam />
        <AboutFrustration />   
        <CTABanner /> 
      </main>
    </>
  );
}
