// components/usecases/GrowingPaymentBusiness/PaymentTeamAndPricing.jsx
import { useState } from "react";
import styles from "./PaymentTeamAndPricing.module.css";

export default function PaymentTeamAndPricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Acquirer Selection And Integration Support",
      description: "Integrate the capabilities of charging and integrating with the right suppliers, use different charging and payment networks, support accountabilities, and design an efficient payment platform to provide and allow in and out for optimal performance.",
      icon: "🏦",
    },
    {
      title: "Onboarding And Migration Assistance",
      description: "Complete migration to our technology with our dedicated expert, whether you're migrating existing members or setting up automated onboarding for new staff. Expert from our expertise in cutting-edge merchant subscription forms for seamless migration.",
      icon: "📋",
    },
    {
      title: "Transaction Monitoring And Dispute Management",
      description: "Create the integrity of your transaction flow with our proactive monitoring services. Use a fully identity verifiable, facilitating timely actions to manage disputes, mitigate frauds, and maintain a secure transaction environment.",
      icon: "📊",
    },
    {
      title: "Fraud Prevention Setup And Optimization",
      description: "Leverage our built-in anti-fraud engine tailored to your KPI specific needs, use fraud detection and analytics to proactively identify and combat prevention measures for a secure, fraud-free payment experience.",
      icon: "🛡️",
    },
    {
      title: "Payment Routing Configuration",
      description: "Optimize transaction efficiency with automatic payment routing. Our team aids in developing custom routing rules, ensuring smooth, cost-effective payment processes that cater to your merchant unique needs.",
      icon: "🔀",
    },
    {
      title: "Custom Development Consultation",
      description: "Support your KPI capabilities with strength: third-party integrations, to provide a deep analysis and recommendations on the most effective development strategies to enhance your platform's functionality.",
      icon: "💻",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.paymentTeamPricing}>
      <div className={styles.container}>
        {/* Payment Team As A Service Section */}
        <div className={styles.paymentTeamSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Payment Team As A Service</h2>
            <p className={styles.sectionSubtitle}>
              Technology is king. Akurateco uses its 15+ years of experience in the industry to build and maintain 
              a reliable and smooth white-label gateway with an unrivalled financial solution.
            </p>
          </div>

          <div className={styles.accordionContainer}>
            {services.map((service, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionTitle} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.titleIcon}>{service.icon}</span>
                  <span className={styles.titleText}>{service.title}</span>
                  <span className={styles.arrow}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ""}`}
                >
                  <div className={styles.accordionText}>
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Pricing Section */}
        <div className={styles.pricingSection}>
          <h2 className={styles.pricingTitle}>Flexible Pricing Tailored To Your Needs</h2>
          <p className={styles.pricingDescription}>
            Discover the affordability and flexibility of Akurateco pricing model. Whether you need unlimited contracts, 
            a specific deployment option, or a tailored feature, our model is designed to significantly reduce costs 
            compared to a broad development. We've crafted an offering that complements your needs—so much so that if 
            you're a little ahead of the curve, we'll even tailor your contract to maximizing savings and expanding 
            your offer that stands out in the market.
          </p>
        </div>
      </div>
    </section>
  );
}