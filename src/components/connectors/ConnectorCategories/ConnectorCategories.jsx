import "./ConnectorCategories.css";
import { connectorCategories } from "./connectorCategoriesData";

const ConnectorCategories = () => {
  return (
    <section className="connector-categories">
      <div className="container">

        <div className="connector-categories__header">

          <span className="connector-categories__badge">
            CONNECTOR TYPES
          </span>

          <h2 className="connector-categories__title">
            Connect To Every Part Of
            The Payment Ecosystem
          </h2>

          <p className="connector-categories__description">
            Access payment providers, acquiring banks, digital wallets,
            open banking services and fraud prevention solutions through
            a single integration framework.
          </p>

        </div>

        <div className="connector-categories__grid">

          {connectorCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="connector-category-card"
              >
                <div className="connector-category-card__icon">
                  <Icon />
                </div>

                <h3>{category.title}</h3>

                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ConnectorCategories;