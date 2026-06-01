// components/usecases/EmbeddedPayments/EmpowerAndReliableSection.jsx
import styles from "./EmpowerAndReliableSection.module.css";

export default function EmpowerAndReliableSection() {
  const empowerFeatures = [
    {
      title: "Customization and branding",
      description: "Offer merchants the ability to personalize their payment interface with customizable buttons and branding options.",
      icon: "🎨",
    },
    {
      title: "International Reach",
      description: "Supports over 25 languages and multiple payment methods, making it easy for merchants to operate globally.",
      icon: "🌍",
    },
    {
      title: "Mobile Optimization",
      description: "A responsive design compatible with Apple Pay and Google Pay ensures a smooth experience on all devices.",
      icon: "📱",
    },
    {
      title: "Frictionless Payments",
      description: "Reduces the wait time for card validation and builds in error messaging to streamline the payment process, reducing obstacles for end-users.",
      icon: "⚡",
    },
  ];

  const reliableFeatures = [
    {
      title: "Deployment Flexibility",
      description: "Builds on your existing infrastructure, ensuring a seamless transition.",
      icon: "🔧",
    },
    {
      title: "High Volume Optimization",
      description: "Optimizes your platform for high-volume transactions, ensuring a smooth and efficient experience.",
      icon: "📈",
    },
    {
      title: "Reliable 24/7 Performance",
      description: "Ensures uninterrupted service, even during peak hours.",
      icon: "⏰",
    },
    {
      title: "Scalable Architecture",
      description: "Capable of scaling to meet your growing needs.",
      icon: "🏗️",
    },
  ];

  return (
    <section className={styles.empowerReliable}>
      <div className={styles.container}>
        {/* Empower Merchants Section */}
        <div className={styles.empowerSection}>
          <h2 className={styles.sectionTitle}>
            Empower Your Merchants With A Customizable Payment Page
          </h2>
          
          <p className={styles.sectionDescription}>
            Enable your merchants to collect payments effortlessly with a secure, fully customizable payment page. 
            Optimized for all devices, our platform is designed to boost merchant conversion rates by providing a superior payment experience.
          </p>

          <div className={styles.featuresGrid}>
            {empowerFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reliable Platform Section */}
        <div className={styles.reliableSection}>
          <h2 className={styles.sectionTitle}>Reliable Platform</h2>
          
          <p className={styles.sectionDescription}>
            Our technology seamlessly integrates with your existing bank infrastructure, elevating your payment system to new heights. 
            Designed for robustness and smooth operation, our platform ensures that your transaction processes are not just maintained but significantly enhanced.
          </p>

          <div className={styles.featuresGrid}>
            {reliableFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}