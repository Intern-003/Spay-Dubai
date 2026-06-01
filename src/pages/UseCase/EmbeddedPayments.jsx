// pages/EmbeddedPayments.jsx
import EmpowerAndReliableSection from "../../components/usecases/EmbeddedPayments/EmpowerAndReliableSection";
import HeroEmbeddedSection from "../../components/usecases/EmbeddedPayments/HeroEmbeddedSection";
import WhyChooseUsSection from "../../components/usecases/EmbeddedPayments/WhyChooseUsSection";
import BankProblemsSection from "../../components/usecases/ModernizingPaymentTechnology/BankProblemsSection";
import styles from "./EmbeddedPayments.module.css";

export default function EmbeddedPayments() {
  return (
    <div className={styles.page}>
      <HeroEmbeddedSection />
      <BankProblemsSection/>
      <WhyChooseUsSection/>
      <EmpowerAndReliableSection/>
      {/* More sections will be added here */}
    </div>
  );
}