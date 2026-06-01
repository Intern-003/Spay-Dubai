import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">

        <div className="about-hero__content">

          <span className="about-hero__badge">
            ABOUT SPAY FINTECH
          </span>

          <h1 className="about-hero__title">
            Powering The Future Of
            <br />
            Global Digital Payments
          </h1>

          <p className="about-hero__description">
            SPAY Fintech provides enterprise-grade payment infrastructure,
            orchestration technology, and connectivity solutions that enable
            merchants, PSPs, banks, and financial institutions to scale
            payment operations with speed, security, and reliability.
          </p>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;