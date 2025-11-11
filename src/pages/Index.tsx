import Hero from "@/components/Hero";
import ResearchMethods from "@/components/ResearchMethods";
import Interview from "@/components/Interview";
import CompetitiveAnalysis from "@/components/CompetitiveAnalysis";
import NeedsAndDifferentials from "@/components/NeedsAndDifferentials";
import NextSteps from "@/components/NextSteps";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ResearchMethods />
      <Interview />
      <CompetitiveAnalysis />
      <NeedsAndDifferentials />
      <NextSteps />
    </div>
  );
};

export default Index;
