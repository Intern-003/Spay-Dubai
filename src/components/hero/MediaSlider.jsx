const mediaLogos = [
  "Finextra",
  "Forbes",
  "Sifted",
  "TechRadar",
  "Finextra",
  "Forbes",
  "Sifted",
  "TechRadar",
];

const MediaSlider = () => {
  return (
    <div className="media-slider">
      <button
        className="media-arrow"
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="media-slider-wrapper">
        <div className="media-track">
          {mediaLogos.map((logo, index) => (
            <div
              key={index}
              className="media-card"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      <button
        className="media-arrow"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
};

export default MediaSlider;