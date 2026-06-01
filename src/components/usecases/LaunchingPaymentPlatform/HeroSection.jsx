// components/HeroSection.tsx
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <>
      {/* Whitepaper Banner */}
      <div className={styles.whitepaperBanner}>
        <div className={styles.whitepaperContainer}>
          <span className={styles.whitepaperText}>
            Future-Proofing Payment Businesses in 2026 - Download now
          </span>
          <button className={styles.downloadButton}>Download →</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>FULLY BRANDABLE</span>
            <span className={styles.badge}>99.9% AVAILABLE</span>
          </div>
          <h1 className={styles.title}>White-Label Solution for PSP</h1>
          <p className={styles.subtitle}>Launch a PSP with zero development costs</p>
          <p className={styles.description}>
            Build your PSP on a scalable white-label PSP solution designed to handle growth.
            Access over 650+ methods, acquirers, and technologies you need to succeed.
          </p>
          <button className={styles.primaryButton}>Request Demo</button>
        </div>
      </section>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input 
            type="text" 
            placeholder="Type here to search" 
            className={styles.searchInput}
          />
        </div>
      </div>
    </>
  );
}