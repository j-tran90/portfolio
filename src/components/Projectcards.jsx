import "../stylesheets/ProjectCards.css";

function ProjectCards() {
  return (
    <>
      <div className="grid container-fluid pb-5">
        <div className="container p-5 display-1 text-center">Portfolio</div>
        <div className="row row-cols-xl-2">
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <a className="nav-link" href="/couriertek">
                <img
                  src="src\assets\vecteezy_abstract-orange-fluid-wave-background_.jpg"
                  alt="img09"
                />
                <figcaption>
                  <h2>
                    Freelance <span>CourierTek</span>
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
                src="src\assets\vecteezy_abstract-blue-gradient-fluid-background_6736876.jpg"
                alt="img09"
              />
              <figcaption>
                <h2>
                  Full Stack Project <span>SeaShell</span>
                </h2>
                <p>
                  Oscar is a decent man. He used to clean porches with pleasure.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <a href="https://nhoracing.vercel.app/">
                <img
                  src="src\assets\vecteezy_abstract-red-fluid-wave-background_.jpg"
                  alt="img09"
                />
                <figcaption>
                  <h2>
                    Freelance <span>Nho Racing</span>
                  </h2>
                  <p>
                    Oscar is a decent man. He used to clean porches with
                    pleasure.
                  </p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="src\assets\vecteezy_abstract-blue-fluid-wave-background_.jpg"
                alt="img09"
              />
              <figcaption>
                <h2>
                  Full Stack Group Project <span>Tix</span>
                </h2>
                <p>
                  Oscar is a decent man. He used to clean porches with pleasure.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
