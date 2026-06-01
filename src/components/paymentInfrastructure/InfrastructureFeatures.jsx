import { SiAlipay, SiWechat, SiKlarna } from "react-icons/si";

import { FiArrowUp, FiArrowDown, FiCloud } from "react-icons/fi";

import "./infrastructureFeatures.css";

const InfrastructureFeatures = () => {
  return (
    <section className="infra-features-section">
      {/* GRID */}
      <div className="infra-features-grid"></div>

      <div className="infra-features-container">
        {/* TOP FEATURE */}
        <div className="feature-row reverse-row">
          {/* LEFT VISUAL */}
          <div className="feature-visual apm-visual">
            <div className="apm-line"></div>

            <div className="apm-card alipay">
              <SiAlipay />
              <span>Alipay</span>
            </div>

            <div className="apm-card wechat">
              <SiWechat />
              <span>WeChat</span>
            </div>

            <div className="apm-card klarna">
              <SiKlarna />
              <span>Klarna</span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="feature-content">
            <span className="feature-badge">Smart APM Support</span>

            <h2>
              Alternative Payment
              <br />
              Methods
            </h2>

            <p>
              From PayPal to WeChat — expand your offering with built-in APM
              connections, unlocking additional transactional volume for your
              merchants, aligned with comprehensive payments infrastructure for
              banks.
            </p>
          </div>
        </div>

        {/* BOTTOM FEATURE */}
        <div className="feature-row">
          {/* LEFT CONTENT */}
          <div className="feature-content">
            <span className="feature-badge">Seamless Migration</span>

            <h2>
              Frictionless Merchants
              <br />
              Migration
            </h2>

            <p>
              Easily import all existing merchants accounts into the system,
              removing implementation complexity and ensuring a smooth migration
              experience for banks and PSPs.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="feature-visual migration-visual">
            <div className="migration-cloud">
              <FiCloud />
            </div>

            <div className="migration-arrows">
              <div className="arrow-up">
                <FiArrowUp />
              </div>

              <div className="arrow-down">
                <FiArrowDown />
              </div>
            </div>

            <div className="migration-box box-1"></div>
            <div className="migration-box box-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureFeatures;
