import "./Hero.css";
import MediaSlider from "./MediaSlider";
import DashboardMockup from "./DashboardMockup";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid" />

      <div className="hero-container">
        {/* LEFT CONTENT */}

        <div className="hero-content">
          <span className="hero-tag">
            PAYMENT INFRASTRUCTURE PLATFORM
          </span>

          <h1 className="hero-title">
            White-Label
            <br />
            Payment Gateway
          </h1>

          <h2 className="hero-subtitle">
            Payment software, infrastructure and team as a service
          </h2>

          <p className="hero-description">
            SPAY simplifies launching payment services with a PCI DSS
            compliant white-label platform, helping PSPs, banks,
            fintechs and merchants scale globally while reducing
            development costs and operational complexity.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn">
              Request a Demo
            </button>

            <button className="hero-secondary-btn">
              Explore Platform
            </button>
          </div>

          <div className="hero-media-section">
            <h3 className="hero-media-title">
              WORLDWIDE MEDIA TALK ABOUT US
            </h3>

            <MediaSlider />
          </div>
        </div>

        {/* RIGHT VISUAL */}

        <div className="hero-visual">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;