import {
  SiPaypal,
  SiVisa,
  SiMastercard,
  SiApplepay,
  SiStripe,
} from "react-icons/si";

import "./whyChoose.css";

const stats = [
  {
    number: "1",
    text: "Dedicated account manager to support your growth",
  },

  {
    number: "30%",
    text: "Boost in approval rates with intelligent routing",
  },

  {
    number: "3",
    text: "Deployment options available: SaaS, On-Premise and Cloud-Agnostic",
  },

  {
    number: "30%",
    text: "Reduction in processing costs through optimized transaction flows",
  },

  {
    number: "5",
    text: "Days to get payment processing up and running",
  },

  {
    number: "99.95%",
    text: "Uptime SLA for uninterrupted payment operations",
  },

  {
    number: "14",
    text: "Days to develop and launch new integrations",
  },

  {
    number: "600+",
    text: "Ready-to-use global payment integrations",
  },

  {
    number: "200+",
    text: "Currencies and cryptocurrencies supported",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-section">
      {/* GRID */}
      <div className="why-grid-bg"></div>

      <div className="why-container">
        {/* TOP */}
        <div className="why-heading">
          <h2>Why Choose Akurateco?</h2>

          <p>
            Proven performance, measurable results, and unmatched flexibility —
            everything you need from a payment orchestration provider.
          </p>
        </div>

        {/* CONTENT */}
        <div className="why-content">
          {/* LEFT */}
          <div className="why-left">
            <div className="stats-grid">
              {stats.map((item, index) => (
                <div key={index} className="stat-box">
                  <h3>{item.number}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="why-right">
            <div className="globe-wrapper">
              {/* GLOBE */}
              <div className="globe"></div>

              {/* FLOATING CARDS */}
              <div className="floating-card card-1">
                <SiApplepay />
                <span>Apple Pay</span>
              </div>

              <div className="floating-card card-2">
                <SiPaypal />
                <span>PayPal</span>
              </div>

              <div className="floating-card card-3">
                <SiVisa />
                <span>Visa</span>
              </div>

              <div className="floating-card card-4">
                <SiStripe />
                <span>Stripe</span>
              </div>

              <div className="floating-card card-5">
                <SiMastercard />
                <span>MasterCard</span>
              </div>

              <div className="floating-card card-6">
                <span>M-Pesa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
