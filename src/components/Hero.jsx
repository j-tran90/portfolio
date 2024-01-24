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
              src="src\assets\pexels-skylar-kang-6044217.jpg"
              className="crop-img"
              alt="..."
            />
            <div className="carousel-caption">
              <h1>Hi, I'm </h1>
              <h1 className="display-1 fw-bolder">John Tran</h1>
              <p className="lead">A Full Stack Web Developer.</p>
              <a className="btn btn-primary" href="/About" role="button">
                About Me
              </a>
            </div>
          </div>
          <div className="carousel-item crop">
            <img
              src="src\assets\pexels-skylar-kang-6044235.jpg"
              className="crop-img"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
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
