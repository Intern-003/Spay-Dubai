// components/usecases/GrowingPaymentBusiness/WhyChooseUs.jsx
import styles from "./WhyChooseUs.module.css";
import { FaCcVisa, FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa";
import { SiGooglepay, SiAlipay } from "react-icons/si";
import { BiWallet, BiCoin } from "react-icons/bi";
import { GiPayMoney, GiStarsStack } from "react-icons/gi";
import { TbInfinity } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";

export default function WhyChooseUs() {
  const partners = [
    { name: "VISA", icon: <FaCcVisa size={36} />, color: "#1a1f71" },
    { name: "stripe", icon: <FaCcStripe size={36} />, color: "#635bff" },
    { name: "PayPal", icon: <FaCcPaypal size={36} />, color: "#003087" },
    { name: "G Pay", icon: <SiGooglepay size={36} />, color: "#4285f4" },
    { name: "Pay", icon: <BiWallet size={36} />, color: "#00457c" },
    { name: "nuvel", icon: <GiStarsStack size={36} />, color: "#00a1e0" },
    { name: "pro", icon: <BiCoin size={36} />, color: "#ff5a00" },
    { name: "ACI Worldwide", icon: <RiBankCardLine size={36} />, color: "#0033a0" },
    { name: "Unlimit", icon: <TbInfinity size={36} />, color: "#ff6b00" },
    { name: "Skrill", icon: <GiPayMoney size={36} />, color: "#862633" },
    { name: "Alipay", icon: <SiAlipay size={36} />, color: "#1677ff" },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why choose us?</h2>
        
        <p className={styles.sectionDescription}>
          Choosing the right software provider is crucial for enhancing your payment systems. 
          Below, you'll discover why partnering with Akurateco is not just a choice, but a strategic 
          decision to ensure continuous innovation, support, and scalability for your payment solutions:
        </p>

        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <div className={styles.partnerIcon} style={{ backgroundColor: partner.color }}>
                {partner.icon}
              </div>
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.connectorsCard}>
          <h3 className={styles.connectorsTitle}>
            Access A World Of Possibilities With Our 650+ Integrated Connectors
          </h3>
          <p className={styles.connectorsDescription}>
            Explore the expansive range of pre-integrated payment solutions available at your fingertips. 
            Our software features over 650+ connectors, including leading companies and innovative technologies, 
            all easily accessible to enhance your payment infrastructure. With Akurateco, integrating new capabilities 
            is as straightforward as selecting the options that best fit your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}