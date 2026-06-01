import "./BusinessImpact.css";

export default function BusinessImpact() {
  const impactCards = [
    {
      title: "Transaction Success Rate",
      value: "99.8%",
      type: "success",
      description:
        "Maximize payment acceptance through intelligent routing, bank redundancy and optimized transaction processing flows.",
    },
    {
      title: "Revenue Growth Potential",
      value: "3X",
      type: "growth",
      description:
        "Expand into new markets, payment methods and merchant segments using a scalable white-label payment infrastructure.",
    },
    {
      title: "Platform Launch Time",
      value: "14",
      suffix: "Days",
      type: "launch",
      description:
        "Launch your branded payment platform significantly faster compared to traditional in-house development cycles.",
    },
  ];

  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        {/* Header */}
        <div className="business-impact-header">
          <span className="business-impact-badge">
            BUSINESS IMPACT
          </span>

          <h2>
            Results You Can Achieve
            <br />
            With SPAY Fintech
          </h2>

          <p>
            Accelerate payment growth, improve transaction success rates and
            launch new payment services faster through our enterprise-grade
            white-label payment infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="business-impact-grid">

          {/* Card 1 */}
          <div className="impact-card">
            <div className="impact-card-content">
              <h3>Transaction Success Rate</h3>

              <div className="impact-value success-value">
                99.8%
              </div>

              <p>
                Maximize payment acceptance through intelligent routing,
                bank redundancy and optimized transaction processing flows.
              </p>
            </div>

            <div className="impact-visual">
              <div className="progress-ring">
                <div className="progress-ring-inner">
                  99.8%
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="impact-card">
            <div className="impact-card-content">
              <h3>Revenue Growth Potential</h3>

              <div className="impact-value growth-value">
                3X
              </div>

              <p>
                Expand into new markets, payment methods and merchant
                segments using a scalable payment ecosystem.
              </p>
            </div>

            <div className="impact-visual">
              <div className="growth-chart">
                <div className="bar bar-one"></div>
                <div className="bar bar-two"></div>
                <div className="bar bar-three"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="impact-card">
            <div className="impact-card-content">
              <h3>Platform Launch Time</h3>

              <div className="impact-value launch-value">
                1
              </div>

              <p>
                Launch your branded payment platform significantly faster
                compared to traditional development cycles.
              </p>
            </div>

            <div className="impact-visual launch-visual">
              <span>1</span>
              <small>Day</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}