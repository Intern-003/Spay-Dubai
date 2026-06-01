// components/usecases/EmbeddedPayments/HeroEmbeddedSection.jsx
import styles from "./HeroEmbeddedSection.module.css";

export default function HeroEmbeddedSection() {
  return (
    <section className={styles.heroEmbedded}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>EMBEDDED PAYMENTS</span>
          </div>
          
          <h1 className={styles.title}>
            Revolutionizing Bank Payment Systems with Orchestration
          </h1>
          
          <p className={styles.description}>
            Streamline your bank's payment processes and enhance operational efficiency with our advanced payment orchestration platform. 
            Discover how integrating our solutions can solve common payment challenges, improve compliance, and drive innovation in your financial services.
          </p>
          
          <button className={styles.demoButton}>Request Demo</button>
        </div>
      </div>
    </section>
  );
}