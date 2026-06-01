import "./AboutProducts.css";
import { productsData } from "./productsData";

const AboutProducts = () => {
  return (
    <section className="about-products">
      <div className="container">

        <div className="about-products__header">

          <span className="about-products__badge">
            OUR SOLUTIONS
          </span>

          <h2 className="about-products__title">
            Technology Built For
            Modern Payment Operations
          </h2>

          <p className="about-products__description">
            SPAY delivers a complete suite of payment technologies
            designed to help businesses launch, manage and scale
            payment operations through a unified infrastructure.
          </p>

        </div>

        <div className="about-products__grid">

          {productsData.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.id}
                className="about-product-card"
              >
                <div className="about-product-card__icon">
                  <Icon size={30} />
                </div>

                <h3>{product.title}</h3>

                <p>{product.description}</p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default AboutProducts;