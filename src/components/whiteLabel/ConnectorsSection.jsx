import {
  SiVisa,
  SiMastercard,
  SiStripe,
  SiPaypal,
  SiGooglepay,
  SiApplepay,
  SiAlipay,
} from "react-icons/si";

import { FiArrowUpRight } from "react-icons/fi";

import "./connectorsSection.css";

const connectors = [
  {
    icon: <SiVisa />,
    className: "visa",
  },

  {
    icon: <SiMastercard />,
    className: "mastercard",
  },

  {
    icon: <SiStripe />,
    className: "stripe",
  },

  {
    icon: <SiPaypal />,
    className: "paypal",
  },

  {
    icon: <SiGooglepay />,
    className: "gpay",
  },

  {
    icon: <SiApplepay />,
    className: "applepay",
  },

  {
    icon: "nuvei",
    className: "nuvei",
  },

  {
    icon: "ppro",
    className: "ppro",
  },

  {
    icon: "ACI",
    className: "aci",
  },

  {
    icon: "Unlimit",
    className: "unlimit",
  },

  {
    icon: "Skrill",
    className: "skrill",
  },

  {
    icon: <SiAlipay />,
    className: "alipay",
  },
];

const ConnectorsSection = () => {
  return (
    <section className="connectors-section">
      {/* GRID */}
      <div className="connectors-grid"></div>

      <div className="connectors-container">
        {/* LEFT */}
        <div className="connectors-left">
          <div className="mini-tag">650+ Global Integrations</div>

          <h2>
            Access 650+
            <br />
            Connectors With One
            <br />
            Integration
          </h2>

          <p>
            Get access to ready-made integrations to banks and payment methods
            while bringing your existing providers into one seamless payment
            ecosystem.
          </p>

          {/* STATS */}
          <div className="stats-row">
            <div className="stat-card">
              <h3>650+</h3>
              <span>Connectors</span>
            </div>

            <div className="stat-card">
              <h3>2 Weeks</h3>
              <span>Integration Time</span>
            </div>
          </div>

          <button className="connectors-btn">
            Explore Connectors
            <FiArrowUpRight />
          </button>
        </div>

        {/* RIGHT */}
        <div className="connectors-right">
          <div className="connectors-card">
            {/* Glow */}
            <div className="card-glow"></div>

            <div className="logos-grid">
              {connectors.map((item, index) => (
                <div key={index} className={`logo-item ${item.className}`}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectorsSection;
