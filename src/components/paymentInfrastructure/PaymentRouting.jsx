import {
  FiShield,
  FiCheckCircle,
  FiXCircle,
  FiCreditCard,
  FiSettings,
  FiHome,
} from "react-icons/fi";

import "./paymentRouting.css";

const PaymentRouting = () => {
  return (
    <section className="routing-section">
      {/* GRID */}
      <div className="routing-grid-bg"></div>

      <div className="routing-container">
        {/* HEADING */}
        <div className="routing-heading">
          <h2>Payment Routing</h2>

          <p>
            With the help of our smart payment routing engine, we’re here to
            assist you in designing sophisticated payment pathways based on a
            range of criteria. From basic routes that use location or currency
            to more specialized options like transactions having an identical
            issuer and acquirer — the system allows for easy setup of all these
            configurations. This is an essential capability within processing
            infrastructure for PSPs and Acquirers.
          </p>
        </div>

        {/* VISUAL */}
        <div className="routing-visual">
          {/* PAYMENT CARD */}
          <div className="payment-card-ui">
            <div className="payment-top">
              <span>Your Logo</span>
              <h3>$100</h3>
            </div>

            <div className="payment-input"></div>

            <div className="payment-methods">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Alipay</span>
            </div>

            <button>PAY</button>
          </div>

          {/* CENTER ENGINE */}
          <div className="routing-engine">
            <div className="engine-icon">
              <FiSettings />
            </div>

            <h4>
              Routing
              <br />
              Engine
            </h4>
          </div>

          {/* TOP BOXES */}

          <div className="routing-box merchant-box">
            <FiSettings />
            <span>Merchant System</span>
          </div>

          <div className="routing-box settlement-box">
            <FiCheckCircle />
            <span>Settlement</span>
          </div>

          {/* RIGHT BANK */}

          <div className="routing-box bank-box">
            <FiHome />
            <span>Bank</span>
          </div>

          {/* DECLINE */}

          <div className="routing-box decline-box">
            <FiXCircle />
            <span>Declined</span>
          </div>

          {/* ANTI FRAUD */}

          <div className="routing-box fraud-box">
            <FiShield />
            <span>Anti-Fraud</span>
          </div>

          {/* CONNECTIONS */}

          <div className="route-line line-1"></div>
          <div className="route-line line-2"></div>
          <div className="route-line line-3"></div>
          <div className="route-line line-4"></div>

          {/* LABELS */}

          <div className="route-label approved">Approved</div>

          <div className="route-label denied">Denied</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentRouting;
