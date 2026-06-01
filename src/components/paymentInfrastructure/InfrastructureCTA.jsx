import { FiCalendar, FiArrowRight } from "react-icons/fi";

import "./infrastructureCTA.css";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

    title:
      "Driving Growth for Banks and Other Financial Institutions via Payment Orchestration",

    author: "Andrew Riabchuk",
    date: "Aug 22, 2024",
    read: "1 min",
  },

  {
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",

    title: "Unlocking Merchant Management via Payment Orchestration",

    author: "Volodymyr Kuianstiev",
    date: "Feb 24, 2025",
    read: "5 min",
  },
];

const InfrastructureCTA = () => {
  return (
    <>
      {/* BLOG SECTION */}
      <section className="infra-blog-section">
        <div className="infra-blog-grid"></div>

        <div className="infra-blog-container">
          {/* HEADING */}
          <div className="infra-blog-heading">
            <span className="infra-mini-badge">Insights & Resources</span>

            <h2>Want To Learn More?</h2>

            <p>
              Dive deeper into the world of payment infrastructure with
              comprehensive guides and industry reviews designed for banks,
              PSPs, and payment businesses.
            </p>
          </div>

          {/* CARDS */}
          <div className="infra-blog-cards">
            {articles.map((item, index) => (
              <div key={index} className="infra-blog-card">
                <div className="infra-blog-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="infra-blog-content">
                  <div className="infra-blog-meta">
                    <span>{item.author}</span>

                    <div className="meta-divider"></div>

                    <span>
                      <FiCalendar />
                      {item.date}
                    </span>

                    <div className="meta-divider"></div>

                    <span>{item.read}</span>
                  </div>

                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="infra-cta-section">
        <div className="infra-cta-glow"></div>

        <div className="infra-cta-container">
          <span className="infra-mini-badge">Let’s Build Together</span>

          <h2>
            Ready To Expand Your
            <br />
            Banking Technology Stack?
          </h2>

          <p>
            Let’s schedule a quick strategy call and explore how Akurateco can
            accelerate your infrastructure growth.
          </p>

          <button>
            Request Demo
            <FiArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default InfrastructureCTA;
