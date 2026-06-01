import "./Connectors.css";

import ConnectorsHero from "../../components/connectors/ConnectorsHero/ConnectorsHero";
import EcosystemDiagram from "../../components/connectors/EcosystemDiagram/EcosystemDiagram";
import ConnectorAudience from "../../components/connectors/ConnectorAudience/ConnectorAudience";
import ConnectorCategories from "../../components/connectors/ConnectorCategories/ConnectorCategories";
import ConnectorShowcase from "../../components/connectors/ConnectorShowcase/ConnectorShowcase";
import IntegrationProcess from "../../components/connectors/IntegrationProcess/IntegrationProcess";
import ConnectorsCTA from "../../components/connectors/ConnectorsCTA/ConnectorsCTA";

const Connectors = () => {
  return (
    <main className="connectors-page">
      <section className="connectors-section">
        <ConnectorsHero />
      </section>

      <section className="connectors-section">
        <EcosystemDiagram />
      </section>

      <section className="connectors-section">
        <ConnectorAudience />
      </section>

      <section className="connectors-section">
        <ConnectorCategories />
      </section>

      <section className="connectors-section">
        <ConnectorShowcase />
      </section>

      <section className="connectors-section">
        <IntegrationProcess />
      </section>

      <section className="connectors-section">
        <ConnectorsCTA />
      </section>
    </main>
  );
};

export default Connectors;