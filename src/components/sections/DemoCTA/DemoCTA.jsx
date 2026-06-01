import "./DemoCTA.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { demoHighlights, demoMetrics } from "./demoStats";

export default function DemoCTA() {
  return (
    <section className="demo-cta-section">
      <div className="demo-cta-container">

        <div className="demo-cta-badge">
          Personalized Consultation
        </div>

        <h2 className="demo-cta-title">
          See How SPAY Fits
          <br />
          Your Business Model
        </h2>

        <p className="demo-cta-description">
          Explore platform capabilities through a tailored session designed
          around your business objectives, operational workflows, expansion
          plans and technical requirements. Our specialists will demonstrate
          relevant capabilities and discuss the most effective approach for
          your growth strategy.
        </p>

        <div className="demo-cta-actions">
          <button className="demo-primary-btn">
            Request Demo
            <ArrowRight size={18} />
          </button>

          <button className="demo-secondary-btn">
            Speak With Experts
          </button>
        </div>

        <div className="demo-highlights">
          {demoHighlights.map((item) => (
            <div key={item.id} className="demo-highlight-item">
              <CheckCircle2 size={16} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="demo-metrics">
          {demoMetrics.map((metric) => (
            <div key={metric.id} className="demo-metric-card">
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}