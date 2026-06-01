import "./ConnectorAudience.css";
import {
  FaStore,
  FaBuilding,
  FaCreditCard
} from "react-icons/fa";

const audienceData = [
  {
    icon: <FaCreditCard />,
    title: "Payment Service Providers",
    description:
      "Expand payment offerings through ready-to-use integrations, accelerate onboarding and simplify connectivity management."
  },
  {
    icon: <FaStore />,
    title: "Merchants & Platforms",
    description:
      "Access diverse payment methods, improve checkout experiences and support business growth across multiple markets."
  },
  {
    icon: <FaBuilding />,
    title: "Banks & Financial Institutions",
    description:
      "Modernize payment operations, extend digital capabilities and accelerate payment innovation initiatives."
  }
];

const ConnectorAudience = () => {
  return (
    <section className="connector-audience">
      <div className="container">

        <div className="connector-audience__header">

          <span className="connector-audience__badge">
            WHO BENEFITS
          </span>

          <h2 className="connector-audience__title">
            Built For Every
            Payment Business
          </h2>

          <p className="connector-audience__description">
            Whether you're a PSP, merchant platform or financial institution,
            SPAY provides the connectivity required to scale payment operations
            efficiently.
          </p>

        </div>

        <div className="connector-audience__grid">

          {audienceData.map((item, index) => (
            <div
              className="connector-audience__card"
              key={index}
            >
              <div className="connector-audience__icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ConnectorAudience;