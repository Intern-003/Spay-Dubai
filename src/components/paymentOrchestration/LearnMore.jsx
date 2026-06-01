import { FiCalendar, FiClock } from "react-icons/fi";

import "./learnMore.css";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

    author: "Andrew Riabchuk",

    date: "Jul 09, 2025",

    readTime: "6 min",

    title:
      "Why Businesses Need Payment Orchestration: Key Features, Benefits, and Use Cases",
  },

  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",

    author: "Andrew Riabchuk",

    date: "Sep 18, 2025",

    readTime: "7 min",

    title:
      "Payment Orchestration vs Payment Gateway: How to Choose the Right Solution?",
  },

  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",

    author: "Alexandra Dolia",

    date: "Sep 16, 2025",

    readTime: "6 min",

    title:
      "Payment Optimization vs Payment Orchestration: Which Strategy Is Right for Your Business?",
  },
];

const LearnMore = () => {
  return (
    <section className="learn-section">
      {/* GRID */}
      <div className="learn-grid-bg"></div>

      <div className="learn-container">
        {/* HEADING */}
        <div className="learn-heading">
          <h2>Want to learn more?</h2>
        </div>

        {/* CARDS */}
        <div className="learn-grid">
          {articles.map((item, index) => (
            <div key={index} className="learn-card">
              {/* IMAGE */}
              <div className="learn-image">
                <img src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="learn-content">
                {/* AUTHOR */}
                <div className="author-row">
                  <div className="author-avatar">{item.author.charAt(0)}</div>

                  <span>{item.author}</span>
                </div>

                {/* META */}
                <div className="meta-row">
                  <div className="meta-item">
                    <FiCalendar />
                    <span>{item.date}</span>
                  </div>

                  <div className="meta-item">
                    <FiClock />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {/* TITLE */}
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
