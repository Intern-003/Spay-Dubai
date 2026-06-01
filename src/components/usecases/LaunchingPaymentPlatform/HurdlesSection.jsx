// components/HurdlesSection.tsx
import styles from "./HurdlesSection.module.css";

export default function HurdlesSection() {
  const hurdles = [
    {
      icon: "💰",
      title: "High Development Costs",
      problem: "Building and maintaining a processing platform from scratch can cost $500,000-$1,000,000+ for the MVP alone.",
      solution: "Cut initial and ongoing expenses dramatically with a white-label PSP solution, reducing them to the equivalent of a single developer's monthly salary.",
    },
    {
      icon: "⏱️",
      title: "Long Time-To-Market",
      problem: "Designing, testing, certifying, and launching your own PSP typically takes 18 months or more.",
      solution: "Go live in just a few weeks by leveraging our pre-built, fully certified white-label solution for PSP with an established white-label PSP interface.",
    },
    {
      icon: "🔌",
      title: "Lack Of Integrations",
      problem: "Developing, testing, and deploying each new integration can take months.",
      solution: "Instantly tap into 600+ pre-integrated banks, acquirers, and APIs, available via a single integration to our white label PSP solution.",
    },
  ];

  return (
    <section className={styles.hurdles}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Common Hurdles of Launching a PSP</h2>
        
        <div className={styles.hurdlesGrid}>
          {hurdles.map((hurdle, index) => (
            <div key={index} className={styles.hurdleCard}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{hurdle.icon}</div>
                <h3 className={styles.cardTitle}>{hurdle.title}</h3>
              </div>
              
              <div className={styles.problemBox}>
                <span className={styles.problemTag}>Problem</span>
                <p className={styles.problemText}>{hurdle.problem}</p>
              </div>
              
              <div className={styles.solutionBox}>
                <span className={styles.solutionTag}>Solution</span>
                <p className={styles.solutionText}>{hurdle.solution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <p className={styles.ctaText}>
            Leverage Akurateco to start a top-of-the-industry White-label Payment Service Provider today.
          </p>
          <button className={styles.ctaButton}>Contact Our Experts</button>
        </div>
      </div>
    </section>
  );
}