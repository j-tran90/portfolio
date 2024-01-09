import "../stylesheets/ProjectCards.css";

function ProjectCards() {
  return (
    <>
      <div className="grid container-fluid pb-5">
        <div className="container p-5 display-1 text-center">Portfolio</div>
        <div className="row row-cols-xl-3">
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <a className="nav-link" href="/couriertek">
                <img src="src\assets\page-bg-2.jpg" alt="img09" />
                <figcaption>
                  <h2>
                    Branding <span>CourierTek</span>
                  </h2>
                  <p>
                    A courier tracking solution for business all types and
                    sizes.
                  </p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="https://www.topgear.com/sites/default/files/images/cars-road-test/2020/05/d255bb77b11d4f5926157df7f6e6ed27/911_turbos_silver015.jpg"
                alt="img09"
              />
              <figcaption>
                <h2>
                  Project <span>SeaShell</span>
                </h2>
                <p>
                  Oscar is a decent man. He used to clean porches with pleasure.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2020/05/a7d05bfa8da648f8814de1478e95ac89/911_turbos_silver045.jpg"
                alt="img09"
              />
              <figcaption>
                <h2>
                  Fan Page <span>Porsche</span>
                </h2>
                <p>
                  Oscar is a decent man. He used to clean porches with pleasure.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2020/05/a7d05bfa8da648f8814de1478e95ac89/911_turbos_silver094.jpg"
                alt="img09"
              />
              <figcaption>
                <h2>
                  Group Project <span>Tix</span>
                </h2>
                <p>
                  Oscar is a decent man. He used to clean porches with pleasure.
                </p>
                <a href="#">View more</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
