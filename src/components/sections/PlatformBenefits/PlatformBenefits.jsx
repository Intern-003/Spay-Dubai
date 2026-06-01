import "./PlatformBenefits.css";
import { platformBenefitsData } from "./platformBenefitsData";

export default function PlatformBenefits() {
  return (
    <section className="platform-benefits-section">
      <div className="platform-benefits-container">

        {/* Header */}

        <div className="platform-benefits-header">

          <span className="platform-benefits-badge">
            PLATFORM CAPABILITIES
          </span>

          <h2>
            Everything You Need To Scale
            <br />
            Modern Payment Operations
          </h2>

          <p>
            Access enterprise-grade payment capabilities designed to improve
            transaction performance, automate operations, enhance security
            and support sustainable business growth.
          </p>

        </div>

        {/* Cards */}

        <div className="platform-benefits-grid">

          {platformBenefitsData.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="platform-benefit-card"
              >
                <div className="platform-benefit-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}