// components/TechnologiesSection.tsx
import styles from "./TechnologiesSection.module.css";

export default function TechnologiesSection() {
  const technologies = [
    {
      icon: "🎯",
      title: "Intelligent Routing",
      description: "Increase your merchants' approval ratio by routing transactions to the optimal service",
    },
    {
      icon: "📊",
      title: "Comprehensive Analytics",
      description: "Gain insights, make right decisions and stay in full control over transaction flow",
    },
    {
      icon: "💡",
      title: "Smart Billing Module",
      description: "Create smart and sophisticated pricing models for your merchants. Unlock additional revenue streams.",
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Protect your merchants from fraud with intelligent internal anti-fraud module and 3rd-party providers",
    },
    {
      icon: "🔄",
      title: "Recurring Payments",
      description: "Enable your merchants to utilize recurring subscriptions with our smart tokens module",
    },
  ];

  return (
    <section className={styles.technologies}>
      <div className={styles.container}>
        {/* Top CTA Banner */}
        <div className={styles.topCtaBanner}>
          <p className={styles.topCtaText}>
            Leverage Akurateco to start a top-of-the-industry White-label Payment Service Provider today.
          </p>
          <button className={styles.contactButton}>Contact Our Experts</button>
        </div>

        {/* Technologies Section Title */}
        <h2 className={styles.sectionTitle}>Technologies We Offer</h2>
        
        <p className={styles.sectionDescription}>
          Fully brandable and absolutely secure white-label PSP interface with all needed features and 650+ integrations to third-party providers,
          helping you launch and scale as a trusted White-label Payment Service Provider without building everything from scratch.
        </p>

        {/* Technologies Grid */}
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <h3 className={styles.techTitle}>{tech.title}</h3>
              <p className={styles.techDescription}>{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Check out leading businesses optimize payments with Akurateco
          </p>
          <button className={styles.exploreButton}>Explore case studies →</button>
        </div>
      </div>
    </section>
  );
}