import "../stylesheets/Projectcards.css";

function ProjectCards() {
  return (
    <>
      <div className="grid container-fluid pb-5">
        <div className="container p-5 display-1 text-center">Portfolio</div>
        <div className="row row-cols-md-2">
          <div className="col">
            <a className="nav-link" href="/couriertek">
              <figure className="effect-oscar">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-orange-fluid-wave-background_19kb.jpg?alt=media&token=0c15938c-681a-48e0-af32-4e3c9e07cfcb"
                  alt="..."
                  loading="eager"
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
              </figure>
            </a>
          </div>

          <a className="nav-link" href="/seashell">
            <div className="col">
              <figure className="effect-oscar">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-blue-gradient-fluid-background_6736876.jpg?alt=media&token=b9c03862-0d66-4c04-8fbd-9305742ccad9"
                  alt=""
                  loading="eager"
                />
                <figcaption>
                  <h2>
                    Full Stack Project <span>SeaShell</span>
                  </h2>
                  <p>
                    A light chat application. A solo full stack project using
                    React, Javascript, Boostrap, and Firebase
                  </p>
                </figcaption>
              </figure>
            </div>
          </a>

          <a className="nav-link" href="/nhoracing">
            <div className="col">
              <figure className="effect-oscar">
                <a href="/nhoracing">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-red-fluid-wave-background_.jpg?alt=media&token=dabfb2f6-3770-4e7e-9f84-b27e4d5fdda1"
                    alt="img09"
                    loading="eager"
                  />
                  <figcaption>
                    <h2>
                      Freelance <span>Nho Racing</span>
                    </h2>
                    <p>
                      A freelance project taking on client's request to create a
                      simple static webpage to showcase an imported vehicle.
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </a>
          <div className="col">
            <figure className="effect-oscar">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-blue-fluid-wave-background_.jpg?alt=media&token=7b3ac57a-be52-4a3b-9b59-87dcd329a634"
                alt="img09"
                loading="lazy"
              />
              <figcaption>
                <h2>
                  Full Stack Group Project <span>Tix</span>
                </h2>
                <p>
                  A survey generator. A full stack group project using Express,
                  Typescript, Bootstrap, and MongoDB.
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
