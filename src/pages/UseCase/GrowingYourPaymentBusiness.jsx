// pages/GrowingYourPaymentBusiness.jsx
import HeroGrowthSection from "../../components/usecases/GrowingYourPaymentBusiness/HeroGrowthSection";
import PacingSection from "../../components/usecases/GrowingYourPaymentBusiness/PacingSection";
import PaymentTeamAndPricing from "../../components/usecases/GrowingYourPaymentBusiness/PaymentTeamAndPricing";
import WhyChooseUs from "../../components/usecases/GrowingYourPaymentBusiness/WhyChooseUs";
import styles from "./GrowingYourPaymentBusiness.module.css";

export default function GrowingYourPaymentBusiness() {
  return (
    <div className={styles.page}>
      <HeroGrowthSection />
      <PacingSection/>
      <WhyChooseUs/>
      <PaymentTeamAndPricing/>
      {/* More sections will be added here */}
    </div>
  );
}