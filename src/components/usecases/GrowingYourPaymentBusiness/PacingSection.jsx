// components/usecases/GrowingPaymentBusiness/PacingSection.jsx
import styles from "./PacingSection.module.css";

export default function PacingSection() {
  const challenges = [
    {
      title: "Outdated Technology",
      challenge: "Legacy systems can't keep pace with the rapidly evolving payment market, limiting the ability to meet expanding merchant demands.",
      solution: "Transition to Akurateco's advanced platform, which facilitates seamless migration and enables PSPs to leverage cutting-edge payment solutions.",
      icon: "⚙️",
    },
    {
      title: "Compliance Challenges",
      challenge: "Maintaining compliance with evolving regulations is difficult with outdated technology, risking penalties and loss of merchant trust.",
      solution: "Akurateco ensures your platform exceeds compliance standards effortlessly, with built-in features for regulatory adherence.",
      icon: "📋",
    },
    {
      title: "Integration Development Time And Costs",
      challenge: "Developing and integrating new payment methods is time-consuming and costly, adding to operational complexities.",
      solution: "Utilize Akurateco's extensive marketplace of 850+ ready-to-use connectors for quick, cost-effective expansion of your payment capabilities.",
      icon: "⏱️",
    },
    {
      title: "Implementation & Monitoring",
      challenge: "Implementing and monitoring advanced payment services requires specific knowledge that PSPs might not have in-house.",
      solution: "Benefit from Akurateco's payment teams as a service, offering expert guidance on optimal implementation and monitoring of payment integrations and services.",
      icon: "📊",
    },
  ];

  return (
    <section className={styles.pacing}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Is your payment platform keeping pace with the rapidly evolving digital marketplace?
        </h2>
        
        <p className={styles.sectionDescription}>
          Many PSPs face challenges with outdated systems that can't support growing demands for flexibility and scalability. 
          Discover how transitioning to Akurateco's advanced software solutions can address these issues, enhancing efficiency 
          and compliance across your operations.
        </p>

        <div className={styles.challengesGrid}>
          {challenges.map((item, index) => (
            <div key={index} className={styles.challengeCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              
              <div className={styles.challengeBox}>
                <span className={styles.challengeTag}>Challenge</span>
                <p className={styles.challengeText}>{item.challenge}</p>
              </div>
              
              <div className={styles.solutionBox}>
                <span className={styles.solutionTag}>Solution</span>
                <p className={styles.solutionText}>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}