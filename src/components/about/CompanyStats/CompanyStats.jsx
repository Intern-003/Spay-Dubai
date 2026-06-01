import "./CompanyStats.css";

const stats = [
  {
    value: "650+",
    label: "Ready Integrations",
  },
  {
    value: "100+",
    label: "Countries Supported",
  },
  {
    value: "99.99%",
    label: "Platform Uptime",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
];

const CompanyStats = () => {
  return (
    <section className="company-stats">
      <div className="container">

        <div className="company-stats__header">

          <span className="company-stats__badge">
            COMPANY OVERVIEW
          </span>

          <h2 className="company-stats__title">
            Trusted By Payment Businesses Worldwide
          </h2>

          <p className="company-stats__description">
            Delivering reliable payment infrastructure, enterprise-grade
            orchestration and seamless connectivity for modern payment
            ecosystems.
          </p>

        </div>

        <div className="company-stats__grid">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="company-stats__card"
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;