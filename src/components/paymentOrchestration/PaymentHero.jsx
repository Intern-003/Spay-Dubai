import { SiPaypal, SiVisa, SiMastercard, SiApplepay } from "react-icons/si";

import "./paymentHero.css";

const providers = [
  "Fraudio",
  "virtualpay",
  "network",
  "Paytec",
  "ACI",
  "Skrill",
  "UnionPay",
  "PayU",
  "M-Pesa",
  "Elavon",
  "Unlimit",
  "Quickpay",
  "SagePay",
  "BluePay",
  "OmniPay",
  "Flutterwave",
  "Concord",
  "Access",
  "MTN",
  "Total",
  "Apple Pay",
  "TrustPay",
];

const PaymentHero = () => {
  return (
    <section className="payment-hero">
      {/* GRID */}
      <div className="payment-grid"></div>

      <div className="payment-container">
        {/* LEFT */}
        <div className="payment-left">
          <p className="payment-tag">
            Akurateco - Payments orchestration platform
          </p>

          <h1>
            Global Payment
            <br />
            Orchestration
            <br />
            Platform
          </h1>

          <h2>Boost Your Payment Conversion Up To 30%</h2>

          <p className="payment-desc">
            Connect to over 650+ providers, optimize transactions, and maximize
            approval rates through a single payment orchestration platform.
          </p>

          <button>Request Demo</button>
        </div>

        {/* RIGHT */}
        <div className="payment-right">
          {/* PROVIDERS */}
          <div className="providers-grid">
            {providers.map((item, index) => (
              <div key={index} className="provider-card">
                {item}
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="orchestration-mobile">
            <div className="mobile-head">
              <div className="brand-row">
                <span>YOUR BRANDING</span>
                <small>English</small>
              </div>

              <h3>$599.00</h3>

              <div className="mobile-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* PAYMENTS */}
            <div className="mobile-payments">
              <div className="pay-item">
                <SiVisa />
                <span>Visa</span>
              </div>

              <div className="pay-item">
                <SiMastercard />
                <span>MasterCard</span>
              </div>

              <div className="pay-item">
                <SiPaypal />
                <span>PayPal</span>
              </div>

              <div className="pay-item">
                <SiApplepay />
                <span>Apple Pay</span>
              </div>

              <div className="pay-item">
                <span className="skrill-text">S</span>
                <span>Skrill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentHero;
