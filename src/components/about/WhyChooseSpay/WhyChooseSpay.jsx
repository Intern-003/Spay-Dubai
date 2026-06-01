import "./WhyChooseSpay.css";
import {
  ShieldCheck,
  Rocket,
  Globe,
  Layers3,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Built with robust security controls, compliance frameworks and infrastructure designed for modern payment operations.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Accelerate go-to-market timelines through ready integrations, streamlined onboarding and scalable architecture.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description:
      "Connect with banks, payment gateways, acquirers, wallets and local payment methods through one platform.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Designed to support growing transaction volumes, multiple markets and enterprise-grade payment ecosystems.",
  },
];

const WhyChooseSpay = () => {
  return (
    <section className="why-spay">
      <div className="container">

        <div className="why-spay__header">

          <span className="why-spay__badge">
            WHY CHOOSE SPAY
          </span>

          <h2 className="why-spay__title">
            Built For Growth, Reliability And Scale
          </h2>

          <p className="why-spay__description">
            SPAY combines modern payment infrastructure, intelligent
            orchestration and enterprise-grade technology to help
            businesses accelerate growth and simplify operations.
          </p>

        </div>

        <div className="why-spay__grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="why-spay__card"
              >
                <div className="why-spay__icon">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSpay;