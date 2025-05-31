
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemInsightSection } from "@/components/sections/ProblemInsightSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Header />
      <HeroSection />
      <ProblemInsightSection />
      <SolutionSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}
