import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { ExtensionBanner } from "@/components/landing/ExtensionBanner";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureProducts } from "@/components/landing/FeatureProducts";
import { TrendingNow } from "@/components/landing/TrendingNow";
import { FeatureAds } from "@/components/landing/FeatureAds";
import { FeatureTikTok } from "@/components/landing/FeatureTikTok";
import { LiveShopping } from "@/components/landing/LiveShopping";
import { StoreTemplates } from "@/components/landing/StoreTemplates";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <ExtensionBanner />
        <DashboardPreview />
        <HowItWorks />
        <FeatureProducts />
        <TrendingNow />
        <FeatureAds />
        <FeatureTikTok />
        <LiveShopping />
        <StoreTemplates />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
