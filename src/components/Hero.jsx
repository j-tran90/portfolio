import "../stylesheets/Hero.css";
import "../stylesheets/Fog.css";

function Hero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item crop active">
            <section className="fog">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fpexels-eberhard-grossgasteiger-691668.jpg?alt=media&token=17aa6742-e68e-444c-81bc-fb9f27a15171"
                className="crop-img carousel-img"
                loading="eager"
                alt="Picture by eberhard grossgasteiger"
                title="Snowy Mountain by eberhard grossgasteiger"
              />
              <div className="fog-container">
                <div className="fog-img fog-img-first"></div>
                <div className="fog-img fog-img-second"></div>
              </div>
            </section>
            <div className="carousel-caption">
              <h1>Hi, I'm </h1>
              <div className="display-1 fw-bolder ">John Tran</div>
              <p className="lead">A Full Stack Web Developer.</p>
              <a
                className="btn btn-light"
                href="/about"
                role="button"
                style={{ zIndex: "1", position: "relative" }}
              >
                About Me
              </a>
              <div></div>
            </div>
          </div>
          <div className="carousel-item crop">
            <section className="fog">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fpexels-eberhard-grossgasteiger-1287138.jpg?alt=media&token=ea8c27f8-1803-4d80-80c3-3af8321688d6"
                className="crop-img carousel-img"
                loading="eager"
                alt="..."
                title="Snowy Mountain by eberhard grossgasteiger"
              />
              <div className="fog-container">
                <div className="fog-img fog-img-first"></div>
                <div className="fog-img fog-img-second"></div>
              </div>
            </section>

            <div className="carousel-caption carousel-caption-two d-md-block">
              <div className="container stack-box">
                <div className="display-1 fw-bolder pb-2">Created With</div>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="..."
                  className="stack"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="..."
                  className="stack"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="..."
                  className="stack"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="..."
                  className="stack"
                />
              </div>

              <div className="py-2">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fpagespeed.png?alt=media&token=61849281-ebc3-4f4b-9d2b-efeca0999f2f"
                  alt="..."
                  className="pagespeed"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
    </>
  );
}

export default Hero;
