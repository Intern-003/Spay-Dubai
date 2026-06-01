// components/usecases/GrowingPaymentBusiness/HeroGrowthSection.jsx
import styles from "./HeroGrowthSection.module.css";

export default function HeroGrowthSection() {
  const integrations = [
    "WALLETS",
    "ACQUIRERS",
    "KYC",
    "ANALYTICS",
    "AKURATECO",
    "ERP, CRM",
    "LOYALTY",
    "CRYPTO",
    "RISK MANAGEMENT",
  ];

  return (
    <section className={styles.heroGrowth}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Enhance Your PSP: Seamless Upgrades and Powerful Integrations
          </h1>
          
          <p className={styles.description}>
            Ready to upgrade your PSP? Explore how Akurateco boosts your setup with advanced integrations. 
            We're here to support your journey to modernizing and expanding payment capabilities.
          </p>
          
          <button className={styles.demoButton}>Request Demo</button>
        </div>
        
        <div className={styles.integrationsBar}>
          {integrations.map((item, index) => (
            <span key={index} className={styles.integrationItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}