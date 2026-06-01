import "./EcosystemDiagram.css";
import { ecosystemData } from "./ecosystemData";

const EcosystemDiagram = () => {
  const { center, left, right, bottom } = ecosystemData;

  return (
    <section className="ecosystem">
      <div className="container">
        <div className="ecosystem__header">

          <span className="ecosystem__badge">
            PAYMENT INFRASTRUCTURE
          </span>

          <h2 className="ecosystem__title">
            How A Modern Payment Ecosystem Works
          </h2>

          <p className="ecosystem__description">
            Our orchestration platform connects payment providers,
            acquirers, fraud systems, wallets and merchants through a
            single integration layer for seamless payment processing.
          </p>

        </div>

        <div className="ecosystem__diagram">

          <div className="ecosystem__left">
            {left.map((item) => (
              <div key={item} className="ecosystem__box">
                {item}
              </div>
            ))}
          </div>

          <div className="ecosystem__center">

            <div className="ecosystem__main-card">

              <h3>{center.title}</h3>

              <ul>
                {center.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

            </div>

          </div>

          <div className="ecosystem__right">
            {right.map((item) => (
              <div key={item} className="ecosystem__box">
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* <div className="ecosystem__bottom">

          {bottom.map((item) => (
            <div key={item} className="ecosystem__bottom-card">
              {item}
            </div>
          ))}

        </div> */}
      </div>
    </section>
  );
};

export default EcosystemDiagram;