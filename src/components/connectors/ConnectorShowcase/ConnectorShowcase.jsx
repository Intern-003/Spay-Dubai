import "./ConnectorShowcase.css";
import { connectorLogos } from "./connectorLogos";

const ConnectorShowcase = () => {
  return (
    <section className="connector-showcase">
      <div className="container">

        <div className="connector-showcase__wrapper">

          {/* Left Side */}

          <div className="connector-showcase__content">

            <span className="connector-showcase__badge">
              INTEGRATION NETWORK
            </span>

            <h2>
              650+ Ready
              <br />
              Integrations
            </h2>

            <p>
              Connect to payment gateways, acquiring banks,
              digital wallets, local payment methods,
              fraud prevention platforms and value-added
              services through a unified ecosystem.
            </p>

            <ul>
              <li>Rapid connector deployment</li>
              <li>Enterprise-grade reliability</li>
              <li>Scalable payment infrastructure</li>
              <li>Continuous connector expansion</li>
            </ul>

            <button>
              Explore All Connectors
            </button>

          </div>

          {/* Right Side */}

          <div className="connector-showcase__logos">

            {connectorLogos.map((logo) => (
              <div
                key={logo}
                className="connector-logo-card"
              >
                {logo}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConnectorShowcase;