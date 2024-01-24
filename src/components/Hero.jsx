import "../stylesheets/Hero.css";

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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_black-gold-marbling-texture-design-for-poster-brochure_6852758.jpg?alt=media&token=b9beb3cd-0679-42ec-8971-989f9df4d859"
              className="crop-img"
              loading="eager"
              alt="Gold Vectors by Vecteezy"
            />
            <div className="carousel-caption">
              <h1>Hi, I'm </h1>
              <h1 className="display-1 fw-bolder">John Tran</h1>
              <p className="lead">A Full Stack Web Developer.</p>
              <a className="btn btn-primary" href="/About" role="button">
                About Me
              </a>
              <div></div>
            </div>
          </div>
          <div className="carousel-item crop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_black-gold-marbling-texture-design-for-poster-brochure_6852754.jpg?alt=media&token=d97536fb-7440-4084-8ca0-8b813871ddc9"
              className="crop-img"
              loading="lazy"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h1 className="display-1 fw-bolder">Stack Used Here</h1>
              <p>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  className="stack"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="stack"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  className="stack"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  className="stack"
                />
              </p>
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
