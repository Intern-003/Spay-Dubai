import InfrastructureHero from "../components/paymentInfrastructure/InfrastructureHero";
import PaymentRouting from "../components/paymentInfrastructure/PaymentRouting";
import InfrastructureFeatures from "../components/paymentInfrastructure/InfrastructureFeatures";
import InfrastructureCTA from "../components/paymentInfrastructure/InfrastructureCTA";

const PaymentInfrastructure = () => {
  return (
    <main className="w-full overflow-hidden bg-[#f7f9fb]">
      <InfrastructureHero />
      <PaymentRouting />
      <InfrastructureFeatures />
      <InfrastructureCTA />
    </main>
  );
};

export default PaymentInfrastructure;
