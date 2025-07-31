import { useState, useEffect } from "react";
import FlowCrossNavbar from "@/components/FlowCrossNavbar";
import FlowCrossHero from "@/components/FlowCrossHero";
import FlowCrossFeatures from "@/components/FlowCrossFeatures";
import FlowCrossStats from "@/components/FlowCrossStats";
import ModLoaderSupport from "@/components/ModLoaderSupport";
import AccountManager from "@/components/AccountManager";
import FlowCrossPricing from "@/components/FlowCrossPricing";


import FlowCrossFooter from "@/components/FlowCrossFooter";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActionButton from "@/components/FloatingActionButton";
import CookieConsent from "@/components/CookieConsent";
import FallingStars from "@/components/FallingStars";

const Index = () => {
  const [starsEnabled, setStarsEnabled] = useState(() => {
    return localStorage.getItem("flowcross_falling_stars") === "true";
  });

  useEffect(() => {
    const handleStarsToggle = (event: CustomEvent) => {
      setStarsEnabled(event.detail.enabled);
    };

    window.addEventListener('falling-stars-toggle', handleStarsToggle as EventListener);
    return () => {
      window.removeEventListener('falling-stars-toggle', handleStarsToggle as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {!starsEnabled && <ParticleBackground />}
      <FallingStars enabled={starsEnabled} />
      <ScrollProgress />
      <FlowCrossNavbar />
      <main className="relative z-10">
        <FlowCrossHero />
        <FlowCrossFeatures />
        <FlowCrossStats />
        <ModLoaderSupport />
        <AccountManager />
        <FlowCrossPricing />
        
      </main>
      <FlowCrossFooter />
      <FloatingActionButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
