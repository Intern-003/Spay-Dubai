// components/usecases/FlexibleDeployment.jsx
import styles from "./FlexibleDeployment.module.css";

export default function FlexibleDeployment() {
  return (
    <section className={styles.deployment}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Flexible Deployment Options</h2>
        
        <p className={styles.sectionDescription}>
          Adapt to your technical and strategic needs with our versatile hosting model. 
          Choose from leading cloud environments, including Azure, Oracle Cloud, and AWS, 
          to ensure optimal performance, reliability, and alignment with your infrastructure preferences.
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>
            Request a Free Demo of the System Today
          </button>
          <button className={styles.secondaryButton}>
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}