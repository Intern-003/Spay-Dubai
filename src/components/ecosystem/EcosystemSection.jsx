// src/components/ecosystem/EcosystemSection.jsx

import "./EcosystemSection.css";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaStore,
  FaExchangeAlt,
} from "react-icons/fa";

export default function EcosystemSection() {
  const ecosystemCards = [
    {
      id: 1,
      icon: <FaNetworkWired />,
      title: "White-Label Payment Gateway",
    },
    {
      id: 2,
      icon: <FaExchangeAlt />,
      title: "Payment Orchestration",
    },
    {
      id: 3,
      icon: <FaStore />,
      title: "Merchant Management",
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Fraud Prevention",
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        <div className="ecosystem-wrapper">
          {/* LEFT SIDE CARDS */}

          <div className="ecosystem-grid">
            {ecosystemCards.map((card) => (
              <div className="eco-card" key={card.id}>
                <div className="eco-card-icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}

          <div className="ecosystem-content">
            <span className="ecosystem-badge">
              PAYMENT INFRASTRUCTURE
            </span>

            <h2>
              Build, Scale & Manage
              <br />
              Your Payment Ecosystem
              <br />
              With SPAY Fintech
            </h2>

            <p>
              Launch and grow payment operations through a
              powerful enterprise-grade platform designed for
              PSPs, fintech companies, payment facilitators,
              banks, marketplaces and merchants worldwide.
            </p>

            <p>
              Manage payment processing, merchant onboarding,
              intelligent routing, fraud prevention, settlement
              management and real-time transaction monitoring
              from a single unified ecosystem.
            </p>

            {/* <div className="ecosystem-actions">
              <a href="/contact" className="ecosystem-btn-primary">
                Request a Demo
              </a>

              <a href="/product" className="ecosystem-btn-secondary">
                Explore Platform
              </a>
            </div> */}

            {/* FEATURE POINTS */}

<div className="ecosystem-features">
  <div className="feature-item">
    Global Payment Coverage
  </div>

  <div className="feature-item">
    Advanced Fraud Protection
  </div>

  <div className="feature-item">
    Merchant Management Suite
  </div>

  <div className="feature-item">
    Enterprise Scalability
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}