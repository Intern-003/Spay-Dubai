import "./OurStory.css";
import storyImage from "../../../assets/about/story-image.webp";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="container">

        <div className="our-story__wrapper">

          <div className="our-story__content">

            <span className="our-story__badge">
              OUR JOURNEY
            </span>

            <h2 className="our-story__title">
              Building The Future Of
              Payment Infrastructure
            </h2>

            <p>
              SPAY Fintech was established with a vision to simplify the
              complexity of modern payment ecosystems. Our founders brought
              together extensive expertise in payment processing, banking
              integrations, merchant management and financial technology.
            </p>

            <p>
              Recognizing the growing demand for scalable payment solutions,
              SPAY was built to help businesses launch, manage and optimize
              payment operations through a single unified platform.
            </p>

            <p>
              Today, SPAY powers payment providers, merchants, financial
              institutions and fintech companies through enterprise-grade
              infrastructure, intelligent orchestration and global
              connectivity.
            </p>

          </div>

          <div className="our-story__image">

            <img
              src={storyImage}
              alt="SPAY Fintech Team"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;