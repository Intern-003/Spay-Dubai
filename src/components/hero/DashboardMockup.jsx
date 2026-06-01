const DashboardMockup = () => {
  return (
    <div className="dashboard-mockup">

      {/* MAIN DASHBOARD */}

      <div className="dashboard-panel">

        <div className="dashboard-header">
          <div className="dashboard-title">
            Payment Overview
          </div>

          <div className="dashboard-badge">
            Live
          </div>
        </div>

        {/* CHART */}

        <div className="dashboard-chart">
          <div className="chart-bars">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
            <span className="bar bar-4"></span>
            <span className="bar bar-5"></span>
            <span className="bar bar-6"></span>
            <span className="bar bar-7"></span>
          </div>
        </div>

        {/* STATS */}

        <div className="dashboard-stats">

          <div className="dashboard-stat-card">
            <h4>$1.8M</h4>
            <span>Monthly Volume</span>
          </div>

          <div className="dashboard-stat-card">
            <h4>98.7%</h4>
            <span>Approval Rate</span>
          </div>

        </div>

        {/* TRANSACTIONS */}

        <div className="transaction-list">

          <div className="transaction-item">
            <div className="transaction-dot success"></div>

            <div>
              <h5>Visa Payment</h5>
              <p>Approved</p>
            </div>

            <strong>$450</strong>
          </div>

          <div className="transaction-item">
            <div className="transaction-dot success"></div>

            <div>
              <h5>Mastercard</h5>
              <p>Approved</p>
            </div>

            <strong>$720</strong>
          </div>

          <div className="transaction-item">
            <div className="transaction-dot pending"></div>

            <div>
              <h5>Apple Pay</h5>
              <p>Processing</p>
            </div>

            <strong>$180</strong>
          </div>

        </div>

      </div>

      {/* FLOATING REVENUE CARD */}

      <div className="floating-card revenue-card">

        <span>Total Revenue</span>

        <h3>$24.8M</h3>

        <p>+18.2% this month</p>

      </div>

      {/* FLOATING SUCCESS CARD */}

      <div className="floating-card success-card">

        <span>Success Rate</span>

        <h3>99.2%</h3>

        <p>Global Processing</p>

      </div>

      {/* MOBILE PAYMENT SCREEN */}

      <div className="mobile-widget">

        <div className="mobile-notch"></div>

        <div className="mobile-content">

          <div className="mobile-logo">
            SPAY
          </div>

          <div className="mobile-price">
            $599.00
          </div>

          <div className="mobile-methods">

            <div className="mobile-method">
              Visa
            </div>

            <div className="mobile-method">
              Mastercard
            </div>

            <div className="mobile-method">
              Apple Pay
            </div>

            <div className="mobile-method">
              Google Pay
            </div>

          </div>

          <button className="mobile-pay-btn">
            Pay Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default DashboardMockup;