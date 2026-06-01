// components/usecases/ModernizingPaymentTechnology/WhyChooseUsSection.jsx
import styles from "./WhyChooseUsSection.module.css";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Intelligent Routing",
      description: "Increase your merchants' approval ratio by routing transactions to the optimal service.",
      icon: "🎯",
    },
    {
      title: "Comprehensive Analytics",
      description: "Gain insights, make right decisions and stay in full control over transaction flow.",
      icon: "📊",
    },
    {
      title: "Smart Billing Module",
      description: "Create smart and sophisticated pricing models for your merchants. Unlock additional revenue streams.",
      icon: "💡",
    },
    {
      title: "Risk Management",
      description: "Protect your merchants from fraud with intelligent internal antifraud module and 3rd-party providers.",
      icon: "🛡️",
    },
    {
      title: "Recurring Payments",
      description: "Enable your merchants to utilize recurring subscriptions with our smart tokens module.",
      icon: "🔄",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        
        <p className={styles.sectionDescription}>
          Enhance approval rates and streamline your multi-channel management through our unified platform, 
          setting us apart from competitors and easing your operational challenges.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}