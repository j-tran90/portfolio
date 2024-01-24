import "../stylesheets/Projectcards.css";

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
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-orange-fluid-wave-background_.jpg?alt=media&token=799e50d4-67b7-4c7c-a16d-f1a859044136"
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
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-blue-gradient-fluid-background_6736876.jpg?alt=media&token=abbbf1f9-bfdb-477f-8492-25bbf9057ca7"
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
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-red-fluid-wave-background_.jpg?alt=media&token=bee10269-7df5-441b-83e7-4441ac64a514"
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
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-blue-fluid-wave-background_.jpg?alt=media&token=95da1947-7096-4153-b738-f672de35a9e5"
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
