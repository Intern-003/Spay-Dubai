import "./IntegrationProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Connector Request",
    description:
      "Share your integration requirements and identify the payment providers, banks or services you want to connect."
  },
  {
    number: "02",
    title: "Technical Review",
    description:
      "Our specialists evaluate documentation, connectivity requirements and implementation considerations."
  },
  {
    number: "03",
    title: "Deployment & Testing",
    description:
      "Configure, validate and test the integration before moving to production-ready environments."
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Launch confidently with ongoing support, monitoring and operational guidance from our team."
  }
];

const IntegrationProcess = () => {
  return (
    <section className="integration-process">
      <div className="container">

        <div className="integration-process__header">

          <span className="integration-process__badge">
            IMPLEMENTATION PROCESS
          </span>

          <h2 className="integration-process__title">
            From Request To
            Production Deployment
          </h2>

          <p className="integration-process__description">
            Our structured implementation approach helps organizations
            accelerate connectivity and reduce integration complexity.
          </p>

        </div>

        <div className="integration-process__grid">

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="integration-process__card"
            >
              <div className="integration-process__number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IntegrationProcess;