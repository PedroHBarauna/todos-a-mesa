import Hero from "@/components/Hero";
import ResearchMethods from "@/components/ResearchMethods";
import Interview from "@/components/Interview";
import CompetitiveAnalysis from "@/components/CompetitiveAnalysis";
import NeedsAndDifferentials from "@/components/NeedsAndDifferentials";
import NextSteps from "@/components/NextSteps";
import ProjectDescription from "@/components/ProjectDescription";
import StakeholdersAndUsers from "@/components/StakeholdersAndUsers";
import Prototype from "@/components/Prototype";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectDescription />
      <StakeholdersAndUsers />
      <ResearchMethods />
      <Interview />
      <CompetitiveAnalysis />
      <NeedsAndDifferentials />
      <Prototype />
      <NextSteps />
    </div>
  );
};

export default Index;
