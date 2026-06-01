// components/usecases/ModernizingPaymentTechnology/OperationalEfficiencySection.jsx
import styles from "./OperationalEfficiencySection.module.css";

export default function OperationalEfficiencySection() {
  const features = [
    {
      title: "Centralized Merchant Management Interface",
      description: "Simplify your operational efficiency with our robust platform that simplifies merchant management. It offers a unified interface to generate detailed transaction reports, enabling you to make informed decisions and optimize your operations.",
      additionalText: "Our intuitive interface ensures seamless integration with your existing systems, enhancing efficiency and reducing manual errors.",
      icon: "📊",
    },
    {
      title: "Frictionless Merchant Migration",
      description: "Easily migrate your merchant management with our platform, designed for a hassle-free migration. We provide a comprehensive migration guide to help you transition smoothly, ensuring a seamless transition and minimal disruption to your operations.",
      icon: "🔄",
    },
    {
      title: "Payment Routing",
      description: "Simplify your payment routing with our advanced payment routing solution. Our payment routing software is designed to optimize your payment routing process, ensuring timely and secure transactions.",
      icon: "🎯",
    },
  ];

  return (
    <section className={styles.efficiency}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Enhance Your Bank's Operational Efficiency</h2>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{feature.icon}</span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
              <p className={styles.cardDescription}>{feature.description}</p>
              {feature.additionalText && (
                <p className={styles.cardAdditional}>{feature.additionalText}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}