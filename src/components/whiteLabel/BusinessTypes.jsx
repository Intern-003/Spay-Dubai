import {
  FiCreditCard,
  FiShoppingCart,
  FiMonitor,
  FiBriefcase,
} from "react-icons/fi";

import "./businessTypes.css";

const businessData = [
  {
    icon: <FiCreditCard />,
    title: "Payment Providers",
    description:
      "Launch and run as a white label payment processor with zero capital expenditures. Software development, infrastructure maintenance and technical support are on us.",
  },

  {
    icon: <FiShoppingCart />,
    title: "Online Business / Merchant",
    description:
      "Expand to new markets, maximize revenue and approval ratio. Grow your business while we take care of payment technology.",
  },

  {
    icon: <FiMonitor />,
    title: "Marketplace / Platform",
    description:
      "Embed financial service into your platform. Unlock additional revenue stream from embedded payment facilitation.",
  },

  {
    icon: <FiBriefcase />,
    title: "Banks / Acquirers",
    description:
      "Serve your merchants efficiently. Merchant onboarding and compliance, customizable payment page, settlements, anti-fraud and third-party integrations.",
  },
];

const BusinessTypes = () => {
  return (
    <section className="business-section">
      <div className="business-container">
        {/* Heading */}
        <div className="business-heading">
          <h2>
            Brandable Software Suitable For
            <br />
            Various Business Types
          </h2>

          <p>
            Expand your business into new international markets by offering
            cutting-edge technology fine-tuned to the needs of a specific niche.
          </p>
        </div>

        {/* Cards */}
        <div className="business-grid">
          {businessData.map((item, index) => (
            <div key={index} className="business-card">
              <div className="business-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
