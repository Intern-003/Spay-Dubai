import "./ConnectorsCTA.css";
import { ArrowRight } from "lucide-react";

function ConnectorsCTA() {
  return (
    <section className="connectors-cta">
      <div className="container">
        <div className="connectors-cta__wrapper">

          <span className="connectors-cta__badge">
            READY TO CONNECT?
          </span>

          <h2 className="connectors-cta__title">
            Expand Your Payment Network
            With Enterprise-Grade Connectivity
          </h2>

          <p className="connectors-cta__description">
            Connect to acquiring banks, payment gateways,
            wallets and local payment methods through a
            single integration layer.
          </p>

          <div className="connectors-cta__actions">

            <button className="connectors-cta__primary">
              Request Demo
              <ArrowRight size={18} />
            </button>

            <button className="connectors-cta__secondary">
              Contact Sales
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ConnectorsCTA;