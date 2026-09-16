import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import StatsBar from "@/components/StatsBar";
import AudienceTabs from "@/components/AudienceTabs";
import AppExperience from "@/components/AppExperience";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import TrustSafety from "@/components/TrustSafety";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import CookieBanner from "@/components/CookieBanner";
import { SITE } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE.name,
    description: SITE.descriptionShort,
    applicationCategory: "MedicalApplication",
    operatingSystem: "iOS, Android",
    url: SITE.domain,
  };

  return (
    <>
      <SiteBackground />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <PositioningStrip />
        <StatsBar />
        <AudienceTabs />
        <AppExperience />
        <FeatureGrid />
        <HowItWorks />
        <TrustSafety />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
