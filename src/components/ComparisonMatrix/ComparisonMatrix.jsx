import { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { comparisonData } from "./comparisonData";
import "./ComparisonMatrix.css";

export default function ComparisonMatrix() {
  const [showAll, setShowAll] = useState(false);

  const visibleRows = showAll
    ? comparisonData
    : comparisonData.slice(0, 5);

  return (
    <section className="comparison-section">
      <div className="comparison-container">

        {/* Header */}

        <div className="comparison-header">

          <span className="comparison-badge">
            PLATFORM COMPARISON
          </span>

          <h2>
            Build Faster With SPAY Fintech
            <br />
            Instead Of Starting From Scratch
          </h2>

          <p>
            Compare the operational, financial and technical differences
            between developing an in-house payment platform and launching
            with SPAY Fintech's enterprise-grade white-label payment
            infrastructure.
          </p>

        </div>

        {/* Comparison Table */}

        <div className="comparison-table">

          <div className="comparison-table-header">

            <div></div>

            <div className="comparison-header-box scratch-header">
              <FaThumbsDown />
              <span>Building Internally</span>
            </div>

            <div className="comparison-header-box spay-header">
              <FaThumbsUp />
              <span>Using SPAY Fintech</span>
            </div>

          </div>

          {visibleRows.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="comparison-row"
              >
                <div className="feature-cell">

                  <div className="feature-icon">
                    <Icon />
                  </div>

                  <h4>{item.feature}</h4>

                </div>

                <div className="content-cell scratch-content">
                  {item.scratch}
                </div>

                <div className="content-cell spay-content">
                  {item.whiteLabel}
                </div>
              </div>
            );
          })}

        </div>

        {/* Actions */}

        <div className="comparison-actions">

          {!showAll ? (
            <button
              className="comparison-btn"
              onClick={() => setShowAll(true)}
            >
              See All 
            </button>
          ) : (
            <button
              className="comparison-btn"
              onClick={() => setShowAll(false)}
            >
              Hide
            </button>
          )}

        </div>

      </div>
    </section>
  );
}