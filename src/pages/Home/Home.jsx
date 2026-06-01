import BusinessTypes from "../../components/business-types/BusinessTypes";
import Hero from "../../components/hero/Hero";
import Integrations from "../../components/integrations/Integrations";
import AnalyticsSection from "../../components/sections/AnalyticsSection/AnalyticsSection";
import EcosystemSection from "../../components/ecosystem/EcosystemSection";
import VideoCTA from "../../components/video-cta/VideoCTA";
import ExpertTeam from "../../components/expert-team/ExpertTeam";
import BusinessImpact from "../../components/sections/BusinessImpact/BusinessImpact";
import ComparisonMatrix from "../../components/ComparisonMatrix/ComparisonMatrix";
import PlatformBenefits from "../../components/sections/PlatformBenefits/PlatformBenefits";
import DemoCTA from "../../components/sections/DemoCTA/DemoCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Integrations />
      <BusinessTypes />
      <AnalyticsSection />
        <EcosystemSection />
      <VideoCTA />
      <ExpertTeam />
      <BusinessImpact />
      <ComparisonMatrix />
<PlatformBenefits />
      <DemoCTA />
    </>
  );
};

export default Home;