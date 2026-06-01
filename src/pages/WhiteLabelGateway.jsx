import HeroSection from "../components/whiteLabel/HeroSection";
import BusinessTypes from "../components/whiteLabel/BusinessTypes";
import ConnectorsSection from "../components/whiteLabel/ConnectorsSection";
import IntegrationTypes from "../components/whiteLabel/IntegrationTypes";

const WhiteLabelGateway = () => {
  return (
    <main className="w-full overflow-hidden bg-[#f7f8fa]">
      <HeroSection />
      <BusinessTypes />
      <ConnectorsSection />
      <IntegrationTypes />
    </main>
  );
};

export default WhiteLabelGateway;
