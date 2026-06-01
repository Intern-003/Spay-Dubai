// components/usecases/PaymentTeamSection.jsx
import { useState } from "react";
import styles from "./PaymentTeamSection.module.css";

export default function PaymentTeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Acquirer Selection and Integration Support",
      description: "Navigate the complexities of choosing and integrating with the right acquirers. We offer documentation reviews, expert recommendations, and insights on which acquirers to prioritize for best performance within your white-label PSP solution.",
      icon: "🏦",
    },
    {
      title: "Onboarding and Migration Assistance",
      description: "Smoothly transition to our technology with our dedicated support, whether you're migrating existing merchants or setting up automated onboarding for new PSPs. Benefit from our expertise in crafting effective merchant subscription forms for seamless integration into your white-label PSP interface.",
      icon: "📋",
    },
    {
      title: "Transaction Monitoring and Dispute Management",
      description: "Ensure the integrity of your transaction flow with our proactive monitoring services. We swiftly identify anomalies, facilitating timely actions to manage disputes, chargebacks, and maintain a secure transaction environment.",
      icon: "📊",
    },
    {
      title: "Fraud Prevention Setup and Optimization",
      description: "Leverage our built-in anti-fraud engine tailored to your PSP's specific needs. We assist in setting initial rules and continuously refining your fraud prevention measures for a secure, fraud-free payment experience.",
      icon: "🛡️",
    },
    {
      title: "Payment Routing Configuration",
      description: "Optimize transaction efficiency with strategic payment routing. Our team aids in developing custom routing rules, ensuring smooth, cost-effective payment processes that cater to your merchants' unique needs.",
      icon: "🔀",
    },
    {
      title: "Custom Development Consultation",
      description: "Expand your PSP's capabilities with strategic third-party integrations. We provide in-depth analysis and recommendations on the most effective development strategies to enhance your platform's functionality.",
      icon: "💻",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.paymentTeam}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Payment Team As A Service</h2>
        
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
    </section>
  );
}