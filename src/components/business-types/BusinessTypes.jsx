import { businessTypes } from "./businessTypesData";
import "./BusinessTypes.css";

export default function BusinessTypes() {
  return (
    <section className="business-types-section">
      <div className="business-types-container">
        {/* Header */}

        <div className="business-types-header">
          <span className="business-tag">
            WHO WE SERVE
          </span>

          <h2>
            Payment Infrastructure Built
            <br />
            For Modern Financial Businesses
          </h2>

          <p>
            SPAY empowers PSPs, fintechs, banks and digital
            businesses with enterprise-grade payment technology
            designed for growth, compliance and scalability.
          </p>
        </div>

        {/* Cards */}

        <div className="business-types-grid">
          {businessTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="business-card"
                key={index}
              >
                <div className="business-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}