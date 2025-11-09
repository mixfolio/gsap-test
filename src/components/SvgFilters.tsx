const SvgFilters = () => {
  return (
    <>
      <section id="svg-filters-section">
        {/* <div>
          <div>
            <h2>Какой-то заголовок</h2>
          </div>
          <div>
            <div id="object" />
          </div>
          <div>
            <img src="./images/moon.png" alt="Moon" className="svgs" />
          </div>
        </div> */}
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <filter id="blur">
            <feGaussianBlur
              stdDeviation="5"
              in="SourceGraphic"
              result="BLUR"
            ></feGaussianBlur>
          </filter>

          <image href="./images/2833.jpg" filter="url(#blur)" />
        </svg>
      </section>
    </>
  );
};

export default SvgFilters;
