import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { integrations } from "./integrationsData";
import "./Integrations.css";

export default function Integrations() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="integrations-section">
      <div className="integrations-container">
        <div className="integrations-header">
          <span className="section-tag">
            GLOBAL PAYMENT NETWORK
          </span>

          <h2>
            Trusted Payment Methods &
            <br />
            Global Integrations
          </h2>

          <p>
            Connect with leading payment providers,
            acquiring banks, digital wallets and
            alternative payment methods through a
            single enterprise-grade platform.
          </p>
        </div>

        <div className="integrations-slider-wrapper">
          <button
            className="slider-btn"
            onClick={scrollLeft}
          >
            <FiChevronLeft />
          </button>

          <div
            className="integrations-slider"
            ref={sliderRef}
          >
            {integrations.map((item, index) => (
              <div
                className="integration-card"
                key={index}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.name}
                  />
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
            ))}
          </div>

          <button
            className="slider-btn"
            onClick={scrollRight}
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="integration-stats">
          <div className="stat-card">
            <h3>100+</h3>
            <p>Payment Methods</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Countries Supported</p>
          </div>

          <div className="stat-card">
            <h3>150+</h3>
            <p>Global Integrations</p>
          </div>

          <div className="stat-card">
            <h3>99.99%</h3>
            <p>Platform Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}