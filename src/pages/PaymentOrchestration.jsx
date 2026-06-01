import PaymentHero from "../components/paymentOrchestration/PaymentHero";
import WhyChoose from "../components/paymentOrchestration/WhyChoose";
import LearnMore from "../components/paymentOrchestration/LearnMore";
import BusinessOperations from "../components/paymentOrchestration/BusinessOperations";
import MagicCTA from "../components/paymentOrchestration/MagicCTA";

const PaymentOrchestration = () => {
  return (
    <main className="w-full overflow-hidden bg-[#f7f8fa]">
      <PaymentHero />
      <WhyChoose />
      <BusinessOperations />
      <LearnMore />
      <MagicCTA />
    </main>
  );
};

export default PaymentOrchestration;
