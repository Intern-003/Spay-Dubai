import "./ConnectorsHero.css";

const ConnectorsHero = () => {
  return (
    <section className="connectors-hero">
      <div className="container">
        <div className="connectors-hero__content">

          <span className="connectors-hero__badge">
            PAYMENT CONNECTIVITY
          </span>

          <h1 className="connectors-hero__title">
            Global Payment Connectors
            <br />
            Built For Modern Payment Businesses
          </h1>

<p className="connectors-hero__description">
  Connect banks, acquirers, payment gateways, wallets, local payment
  methods, fraud prevention services and alternative payment solutions
  through a single integration layer designed for scalable payment
  operations.
</p>

          <div className="connectors-hero__actions">
            <button className="connectors-hero__button">
              Explore Connectors
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectorsHero;