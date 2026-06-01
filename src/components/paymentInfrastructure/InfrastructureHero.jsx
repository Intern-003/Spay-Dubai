import { FiDollarSign, FiShield, FiLayers } from "react-icons/fi";

import "./infrastructureHero.css";

const features = [
  {
    icon: <FiDollarSign />,
    text: "Revenue Growth",
  },

  {
    icon: <FiShield />,
    text: "Secure Infrastructure",
  },

  {
    icon: <FiLayers />,
    text: "Smart Orchestration",
  },
];

const InfrastructureHero = () => {
  return (
    <section className="infra-hero">
      {/* GRID */}
      <div className="infra-grid"></div>

      <div className="infra-container">
        {/* LEFT */}
        <div className="infra-left">
          <p className="infra-tag">
            Spay Fintech — Payment Infrastructure for PSPs and Acquirers
          </p>

          <h1>
            Payment Infrastructure
            <br />
            for Banks - Akurateco
          </h1>

          <p className="infra-desc">
            Discover new revenue opportunities and reduce existing costs. Our
            white-label platform offers everything from comprehensive merchant
            management to a robust orchestration engine, and much more — forming
            the backbone of payment processing infrastructure for PSPs and
            Acquirers.
          </p>

          {/* FEATURES */}
          <div className="infra-features">
            {features.map((item, index) => (
              <div key={index} className="infra-feature">
                <div className="feature-icon">{item.icon}</div>

                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="infra-btn">Talk to experts</button>
        </div>

        {/* RIGHT */}
        <div className="infra-right">
          <div className="infra-visual">
            {/* GLOW */}
            <div className="infra-glow"></div>

            {/* MAIN ICON */}
            <div className="bank-icon">
              <div className="bank-roof"></div>

              <div className="bank-columns">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="bank-base"></div>
            </div>

            {/* FLOATING */}
            <div className="floating-money money-1">$</div>
            <div className="floating-money money-2">$</div>
            <div className="floating-money money-3">$</div>

            <div className="floating-square square-1"></div>
            <div className="floating-square square-2"></div>
            <div className="floating-square square-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureHero;
