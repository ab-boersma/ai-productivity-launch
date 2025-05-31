
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemInsightSection } from "@/components/sections/ProblemInsightSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      <HeroSection />
      <ProblemInsightSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
