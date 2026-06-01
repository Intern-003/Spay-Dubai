import { FiTrendingUp, FiSearch, FiGlobe } from "react-icons/fi";

import "./businessOperations.css";

const cards = [
  {
    icon: <FiTrendingUp />,
    title: "Boost Your Payment Performance",

    description:
      "Maximize approval rates and minimize costs with built-in smart routing, cascading, and automatic updates.",
  },

  {
    icon: <FiSearch />,
    title: "Gain Full Control Over Your Payment Flow",

    description:
      "Take charge of every transaction. Expand to new markets, set your own rules, and scale without building infrastructure from scratch.",
  },

  {
    icon: <FiGlobe />,
    title: "Access Global Payment Coverage",

    description:
      "Leverage 650+ integrations with banks, acquirers, APMs, and local providers worldwide via one integration to the platform.",
  },
];

const BusinessOperations = () => {
  return (
    <section className="business-operations">
      {/* GRID */}
      <div className="operations-grid-bg"></div>

      <div className="operations-container">
        {/* HEADING */}
        <div className="operations-heading">
          <h2>
            How Payment Orchestration Simplifies
            <br />
            Business Operations
          </h2>

          <p>
            Payments orchestration platform helps businesses streamline payment
            flows, improve conversions, and gain full control over global
            transactions — all through a single solution.
          </p>
        </div>

        {/* CARDS */}
        <div className="operations-grid">
          {cards.map((item, index) => (
            <div key={index} className="operations-card">
              <div className="operations-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOperations;
