import "./VideoCTA.css";

export default function VideoCTA() {
  return (
    <section className="video-cta-section">
      <div className="video-cta-container">

        {/* Header */}
        <div className="video-cta-header">
          <span className="video-cta-badge">
            PRODUCT OVERVIEW
          </span>

          <h2>
            Learn More About
            <br />
            SPAY Fintech
          </h2>

          <p>
            Explore how our enterprise-grade white-label payment
            infrastructure empowers PSPs, fintech companies,
            acquiring banks, payment facilitators and merchants
            to launch, manage and scale payment operations globally.
          </p>
        </div>

        {/* Video Section */}
        <div className="video-cta-video-wrapper">

          <div className="video-glow video-glow-left"></div>
          <div className="video-glow video-glow-right"></div>

          <div className="video-frame">
<iframe
  src="https://www.youtube.com/embed/BcNlOGFDQnw"
  title="SPAY Fintech Overview"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="video-cta-content">

          <h3>
            Discover How SPAY Can Accelerate
            <br />
            Your Business Growth
          </h3>

          <p>
            Build a modern payment ecosystem with intelligent routing,
            payment orchestration, merchant onboarding, fraud prevention,
            settlement management and real-time transaction monitoring —
            all from a single unified platform designed for global scale.
          </p>
{/* 
          <div className="video-cta-features">

            <div className="video-feature">
              <span></span>
              Global Payment Coverage
            </div>

            <div className="video-feature">
              <span></span>
              Enterprise Scalability
            </div>

            <div className="video-feature">
              <span></span>
              Merchant Management
            </div>

            <div className="video-feature">
              <span></span>
              Intelligent Payment Routing
            </div>

          </div> */}

          <div className="video-cta-buttons">

            {/* <button className="video-primary-btn">
              Request a Demo
            </button> */}

            <button className="video-secondary-btn">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}