// pages/ModernizingPaymentTechnology.jsx
import BankProblemsSection from "../../components/usecases/ModernizingPaymentTechnology/BankProblemsSection";
import HeroModernizingSection from "../../components/usecases/ModernizingPaymentTechnology/HeroModernizingSection";
import OperationalEfficiencySection from "../../components/usecases/ModernizingPaymentTechnology/OperationalEfficiencySection";
import WhyChooseUsSection from "../../components/usecases/ModernizingPaymentTechnology/WhyChooseUsSection";
import styles from "./ModernizingPaymentTechnology.module.css";

export default function ModernizingPaymentTechnology() {
  return (
    <div className={styles.page}>
      <HeroModernizingSection />
      <BankProblemsSection/>
      <WhyChooseUsSection/>
      <OperationalEfficiencySection/>
      {/* More sections will be added here */}
    </div>
  );
}