import { FiSmartphone, FiServer, FiCreditCard, FiLayers } from "react-icons/fi";

import { SiWordpress } from "react-icons/si";

import { FaMagento } from "react-icons/fa";

import "./integrationTypes.css";

const integrations = [
  {
    iconLeft: <FiSmartphone />,
    iconRight: <FiServer />,
    title: "Mobile SDK",
    color: "teal",
  },

  {
    customIcons: (
      <div className="cms-icons">
        <FiLayers />
        <FaMagento />
        <SiWordpress />
      </div>
    ),
    title: "CMS Plugins",
    color: "purple",
  },

  {
    iconLeft: <FiServer />,
    iconRight: <FiServer />,
    title: "API REST / API SOAP",
    color: "blue",
  },

  {
    iconLeft: <FiCreditCard />,
    iconRight: <FiServer />,
    title: "Hosted Payment Page (HPP)",
    color: "blue",
  },
];

const IntegrationTypes = () => {
  return (
    <section className="integration-section">
      {/* GRID */}
      <div className="integration-grid-bg"></div>

      <div className="integration-container">
        {/* HEADING */}
        <div className="integration-heading">
          <span className="mini-badge">Easy Integrations</span>

          <h2>Types Of Integration</h2>

          <p>
            <strong>Integration has never been easier.</strong> Below are the
            integration options your merchants have with Spay Fintech.
          </p>
        </div>

        {/* GRID */}
        <div className="integration-grid">
          {integrations.map((item, index) => (
            <div key={index} className="integration-card">
              {/* ICONS */}
              <div className={`integration-icons ${item.color}`}>
                {item.customIcons ? (
                  item.customIcons
                ) : (
                  <>
                    <div className="icon-box">{item.iconLeft}</div>

                    <div className="line-animation"></div>

                    <div className="icon-box">{item.iconRight}</div>
                  </>
                )}
              </div>

              {/* TITLE */}
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationTypes;
