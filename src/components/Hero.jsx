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
              title="Gold Vectors by Vecteezy"
            />
            <div className="carousel-caption">
              <h1>Hi, I'm </h1>
              <div className="display-1 fw-bolder">John Tran</div>
              <p className="lead">A Full Stack Web Developer.</p>
              <a className="btn btn-light" href="/about" role="button">
                About Me
              </a>
              <div></div>
            </div>
          </div>
          <div className="carousel-item crop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_black-gold-marbling-texture-design-for-poster-brochure_6852754.jpg?alt=media&token=d97536fb-7440-4084-8ca0-8b813871ddc9"
              className="crop-img"
              loading="eager"
              alt="..."
              title="Gold Vectors by Vecteezy"
            />
            <div className="carousel-caption d-md-block">
              <div
                className="container"
                style={{
                  borderRadius: "20px",
                  border: "3px solid white",
                  maxWidth: "700px",
                  padding: "20px",
                  backgroundColor: "#1b1b1b",
                }}
              >
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

              <div className="py-2 pagespeed">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fpagespeed.png?alt=media&token=61849281-ebc3-4f4b-9d2b-efeca0999f2f"
                  alt="..."
                  style={{
                    borderRadius: "20px",
                    border: "3px solid white",
                  }}
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
