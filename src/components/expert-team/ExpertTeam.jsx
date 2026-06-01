import "./ExpertTeam.css";
import {
  FaCheckCircle,
  FaUserTie,
  FaGlobe,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

export default function ExpertTeam() {
  const expertiseCards = [
    {
      icon: <FaBalanceScale />,
      title: "Strategic Payment Advisory",
      description:
        "We collaborate with your team to design scalable payment strategies, improve operational efficiency and identify new growth opportunities across local and international markets.",
    },
    {
      icon: <FaUserTie />,
      title: "Dedicated Success Team",
      description:
        "Receive ongoing guidance from experienced payment professionals who provide proactive support, performance recommendations and hands-on assistance whenever needed.",
    },
    {
      icon: <FaGlobe />,
      title: "Regulatory & Market Expertise",
      description:
        "Expand confidently into new regions with expert guidance on compliance requirements, banking partnerships and evolving payment regulations.",
    },
  ];

  const benefits = [
    "Dedicated Account Managers",
    "Regulatory Guidance",
    "24/7 Operational Support",
    "Market Expansion Expertise",
  ];

  return (
    <section className="expert-team-section">
      <div className="expert-team-container">
        {/* Left Content */}
        <div className="expert-team-content">
          <span className="expert-team-badge">
            DEDICATED PAYMENT EXPERTS
          </span>

          <h2 className="expert-team-title">
            Your Dedicated Payment Team
            <br />
            Without Expanding Headcount
          </h2>

          <p className="expert-team-description">
            Focus on growing your business while our payment specialists,
            compliance advisors and account managers help streamline
            operations, solve challenges and support expansion into new
            markets. Gain access to industry expertise without the cost and
            complexity of building an in-house payment department.
          </p>

          <div className="expert-cards-grid">
            {expertiseCards.map((card, index) => (
              <div className="expert-card" key={index}>
                <div className="expert-card-icon">{card.icon}</div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>
            ))}
          </div>

          <div className="expert-benefits">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <FaCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="expert-team-actions">
            <button className="expert-primary-btn">
              Talk To Experts
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="expert-team-visual">
          {/* <div className="dashboard-preview"> */}
            {/* <div className="dashboard-card analytics-card">
              <div className="dashboard-stat">
                <span>Success Rate</span>
                <strong>99.8%</strong>
              </div>

              <div className="dashboard-chart">
                <div className="chart-line"></div>
              </div>
            </div> */}

            {/* <div className="dashboard-card metrics-card">
              <div className="metric-box">
                <span>Transactions</span>
                <strong>2.4M+</strong>
              </div>

              <div className="metric-box">
                <span>Markets</span>
                <strong>40+</strong>
              </div>
            </div> */}
          {/* </div> */}

          <div className="expert-phone">
            <div className="phone-notch"></div>

            <div className="phone-header">
              <div className="expert-avatar">S</div>

              <div>
                <h4>SPAY Expert Team</h4>
                <span>Online</span>
              </div>
            </div>

            <div className="chat-body">
              <div className="message received">
                Hello! How can we help you today?
              </div>

              <div className="message sent">
                We would like to launch in UAE.
              </div>

              <div className="message received">
                Great choice. We'll guide you through compliance,
                banking requirements and integration planning.
              </div>

              {/* <div className="message received">
                Our specialists will assist your team throughout
                the onboarding process.
              </div> */}
            </div>

            <div className="chat-input">
              <span>Type your message...</span>

              <button>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}