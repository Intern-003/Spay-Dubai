// pages/LaunchingPaymentPlatform.tsx
import FAQSection from "../../components/usecases/LaunchingPaymentPlatform/FAQSection";
import FlexibleDeployment from "../../components/usecases/LaunchingPaymentPlatform/FlexibleDeployment";
import HeroSection from "../../components/usecases/LaunchingPaymentPlatform/HeroSection";
import HurdlesSection from "../../components/usecases/LaunchingPaymentPlatform/HurdlesSection";
import PaymentTeamSection from "../../components/usecases/LaunchingPaymentPlatform/PaymentTeamSection";
import TechnologiesSection from "../../components/usecases/LaunchingPaymentPlatform/TechnologiesSection";
import WantToLearnMore from "../../components/usecases/LaunchingPaymentPlatform/WantToLearnMore";
import styles from "./LaunchingPaymentPlatform.module.css";

export default function LaunchingPaymentPlatform() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <HurdlesSection />
      <TechnologiesSection/>
      <PaymentTeamSection/>
      <FlexibleDeployment/>
      <WantToLearnMore/>
      <FAQSection />
      {/* You can add more sections below */}
    </div>
  );
}