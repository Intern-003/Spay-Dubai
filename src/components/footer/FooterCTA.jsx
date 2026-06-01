import "./footer.css";

const FooterCTA = () => {
  return (
    <section className="footer-cta">
      <div className="footer-cta-glow footer-cta-glow-1"></div>
      <div className="footer-cta-glow footer-cta-glow-2"></div>

      <div className="footer-cta-container">
        <div className="footer-cta-badge">
          <span>SPAY FINTECH</span>
        </div>

        <h2>
          Ready to Scale Your
          <span> Payment Business?</span>
        </h2>

        <p>
          Launch, manage and optimize payment operations with enterprise-grade
          infrastructure trusted by PSPs, banks, fintechs and merchants
          worldwide.
        </p>

        <div className="footer-cta-stats">
          <div className="cta-stat">
            <h3>99.99%</h3>
            <span>Platform Uptime</span>
          </div>

          <div className="cta-stat">
            <h3>24/7</h3>
            <span>Technical Support</span>
          </div>

          <div className="cta-stat">
            <h3>100+</h3>
            <span>Global Integrations</span>
          </div>

          <div className="cta-stat">
            <h3>50+</h3>
            <span>Countries Supported</span>
          </div>
        </div>

        <div className="footer-cta-actions">
          <button className="cta-primary-btn">
            Request Demo
          </button>

          <button className="cta-secondary-btn">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;