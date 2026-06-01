// components/usecases/EmbeddedPayments/BankProblemsSection.jsx
import styles from "./BankProblemsSection.module.css";

export default function BankProblemsSection() {
  const problems = [
    {
      title: "Lack Of Payment Innovation",
      challenge: "banks face challenges in staying competitive without continual technological upgrades.",
      solution: "Partner with us to easily implement cutting-edge technology like pay-by-pin, advanced tokenization and many more without needing merchant offering.",
      icon: "💡",
    },
    {
      title: "Market Share Expansion",
      challenge: "banks struggle to remain competitive in new regions without offering localized or alternative payment methods.",
      solution: "Integrating with us grants access to over 850+ payment methods, simplifying expansion and enabling banks to effectively serve local merchants or capture new markets.",
      icon: "🌍",
    },
    {
      title: "Inefficient Merchant Management",
      challenge: "Legacy merchant management systems struggle with efficiently handling a vast number of merchants, making operations cumbersome.",
      solution: "Our platform offers a robust, easy-to-use, and flexible management system, streamlining merchant management and improving operational efficiency.",
      icon: "📋",
    },
    {
      title: "Merchant Migration",
      challenge: "Legacy systems often hold banks back, complicating the transition to more sophisticated merchant systems without impacting merchant experience.",
      solution: "We provide a smooth migration mechanism that ensures a quick and safe transition for all merchants, minimizing downtime and maintaining service quality.",
      icon: "🔄",
    },
  ];

  return (
    <section className={styles.problemsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          But what are the problems that even the biggest banks often face?
        </h2>

        <div className={styles.problemsGrid}>
          {problems.map((item, index) => (
            <div key={index} className={styles.problemCard}>
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