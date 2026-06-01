import "./MissionVision.css";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="container">

        <div className="mission-vision__header">

          <span className="mission-vision__badge">
            OUR PURPOSE
          </span>

          <h2 className="mission-vision__title">
            Driving Innovation In
            Global Payments
          </h2>

          <p className="mission-vision__description">
            Our mission and vision guide every innovation, integration,
            and solution we build for payment providers, merchants,
            banks, and financial institutions worldwide.
          </p>

        </div>

        <div className="mission-vision__grid">

          {/* Mission Card */}

          <div className="mission-card">

            <div className="mission-card__icon">
              <Target size={34} />
            </div>

            <h3>Our Mission</h3>

            <p>
              Empower businesses with secure, scalable and intelligent
              payment technology that simplifies complexity, accelerates
              growth and enables seamless payment experiences across
              global markets.
            </p>

          </div>

          {/* Vision Card */}

          <div className="vision-card">

            <div className="vision-card__icon">
              <Eye size={34} />
            </div>

            <h3>Our Vision</h3>

            <p>
              Become the leading payment infrastructure platform
              connecting every participant in the digital payments
              ecosystem through innovation, reliability and
              enterprise-grade technology.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;