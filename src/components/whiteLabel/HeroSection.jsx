import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Grid */}
      <div className="hero-grid"></div>

      {/* Main Wrapper */}
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-tag">Spay Fintech – White-Label Payment Gateway</p>

          <h1 className="hero-title">
            White-label
            <br />
            Payment Gateway
          </h1>

          <p className="hero-description">
            Create a payment gateway that operates under your own brand and run
            it with a dedicated payment team at your service.
          </p>

          <button className="hero-btn">Talk to experts</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          {/* Laptop */}
          <div className="dashboard-card">
            <div className="dashboard-wrapper">
              {/* Sidebar */}
              <div className="dashboard-sidebar">
                <h2>Spay Fintech</h2>

                <div className="sidebar-links">
                  <p>Transactions</p>
                  <p>Customers</p>
                  <p>Payouts</p>
                  <p>Balances</p>
                  <p>Subscriptions</p>
                  <p>Payment plans</p>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="dashboard-content">
                {/* Graph */}
                <div className="graph-card">
                  <div className="graph-bars">
                    <div className="bar small"></div>
                    <div className="bar medium"></div>
                    <div className="bar large"></div>
                    <div className="bar xlarge"></div>
                    <div className="bar medium2"></div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="bottom-cards">
                  {/* Circle */}
                  <div className="success-card">
                    <div className="circle-chart">
                      <span>95%</span>
                    </div>

                    <p>Success rate</p>
                  </div>

                  {/* Issue */}
                  <div className="issue-card">
                    <h3>Payment Issues</h3>

                    <div className="issue-item">
                      <div className="issue-top">
                        <span>Customer errors</span>
                        <span>85%</span>
                      </div>

                      <div className="issue-line">
                        <div className="line red"></div>
                      </div>
                    </div>

                    <div className="issue-item">
                      <div className="issue-top">
                        <span>Bank errors</span>
                        <span>60%</span>
                      </div>

                      <div className="issue-line">
                        <div className="line pink"></div>
                      </div>
                    </div>

                    <div className="issue-item">
                      <div className="issue-top">
                        <span>System errors</span>
                        <span>35%</span>
                      </div>

                      <div className="issue-line">
                        <div className="line light"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="mobile-card">
            <div className="mobile-top">
              <p>PAYMENT</p>

              <h2>$599.00</h2>

              <span>Enterprise</span>
            </div>

            <div className="payment-list">
              {[
                "Alipay",
                "Apple Pay",
                "Google Pay",
                "M-Pesa",
                "PayPal",
                "Stripe",
              ].map((item, index) => (
                <div key={index} className="payment-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
