import "./AnalyticsSection.css";
import dashboardImage from "../../../assets/images/dashboard-preview.jpg";
export default function AnalyticsSection() {
  return (
    <section className="analytics-section">
      <div className="analytics-container">
<div className="analytics-header">
  <span className="analytics-badge">
    CENTRALIZED PAYMENT MANAGEMENT
  </span>

  <h2>
    Keep All Payment Data
    <br />
    In One Place
  </h2>

  <p>
    Access real-time payment analytics, transaction monitoring,
    merchant management, settlements, reconciliation and reporting
    through a unified enterprise dashboard built for PSPs,
    fintechs and payment institutions.
  </p>
</div>

<div className="analytics-dashboard-wrapper">

  <div className="analytics-card analytics-card-top-left">
    <span>Total Volume</span>
    <h4>$24.8M</h4>
    <p>+18.2% this month</p>
  </div>

  <div className="analytics-card analytics-card-bottom-right">
    <span>Approval Rate</span>
    <h4>99.2%</h4>
    <p>Global Processing</p>
  </div>

  <div className="analytics-dashboard-image">
    <img
      src={dashboardImage}
      alt="SPAY Dashboard"
    />
  </div>

</div>
      </div>
    </section>
  );
}