import "../stylesheets/Projectcards.css";
import "../stylesheets/Skills.css";

function ProjectCards() {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="container p-5 display-1 text-center">
          Portfolio <i className="bi bi-arrow-down-right-square display-6"></i>
        </div>

        <div className="card-group">
          <div className="card brighten">
            <a href="https://glamorous-tan-slacks.cyclic.app/">
              <img
                className="card-img-top card-1 crop-img "
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fct-2.png?alt=media&token=0b7aa052-0d57-41f6-a181-67d4f1814894"
                alt="Card image cap"
              />
            </a>
            <div className="card-body">
              <div className="display-4 card-title">CourierTek</div>
              <p className="card-text">
                A Free lance project. A courier tracking solution for business
                all types and sizes.
              </p>
              <a
                href="/couriertek"
                className="btn btn-warning my-2 mx-2"
                role="button"
              >
                Tech Stack
              </a>
              <a
                href="https://glamorous-tan-slacks.cyclic.app/"
                className="btn btn-warning mx-2"
                role="button"
              >
                Go to CourierTek
              </a>
            </div>
          </div>
          <div className="card brighten">
            <a href="https://seashell.vercel.app/">
              <img
                className="card-img-top card-1 crop-img"
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fseashell.png?alt=media&token=3dcb7ed7-d0b3-4632-bbc4-b1022bc6f87a"
                alt="Card image cap"
              />
            </a>
            <div className="card-body">
              <div className="display-4 card-title">SeaShell</div>
              <p className="card-text">
                A light chat application. A solo full stack project using React,
                Javascript, Boostrap, and Firebase.
              </p>
              <a
                href="/seashell"
                className="btn btn-info my-2 mx-2"
                role="button"
              >
                Tech Stack
              </a>
              <a
                href="https://seashell.vercel.app/"
                className="btn btn-info mx-2"
                role="button"
              >
                Go to SeaShell
              </a>
            </div>
          </div>
          <div className="card brighten">
            <a href="https://nhoracing.vercel.app/">
              <img
                className="card-img-top card-1 crop-img"
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fnhoracing.png?alt=media&token=a3a312c0-3019-4aa8-9bc6-c3cc065e5292"
                alt="nho racing"
              />
            </a>
            <div className="card-body">
              <div className="display-4 card-title">Nho Racing</div>
              <p className="card-text">
                A freelance project taking on client's request to create a
                simple static webpage to showcase an imported vehicle.
              </p>
              <a
                href="/nhoracing"
                className="btn btn-danger my-2 mx-2"
                role="button"
              >
                Tech Stack
              </a>
              <a
                href="https://nhoracing.vercel.app/"
                className="btn btn-danger mx-2"
                role="button"
              >
                Go to Nho Racing
              </a>
            </div>
          </div>

          <div className="card brighten">
            <a href="https://calorator.vercel.app/">
              <img
                className="card-img-top card-1 crop-img"
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fcalorator.png?alt=media&token=bd3dee5a-dadd-4638-9115-33deff977b71"
                alt="calorator"
              />
            </a>
            <div className="card-body">
              <div className="display-4 card-title">Calorator</div>
              <p className="card-text">
                Calorie tracker. A solo full stack project using React,
                Javascript, and Firebase.
              </p>
              <div className="align-items-end">
                <a
                  href="/calorator"
                  className="btn btn-success my-2 mx-2"
                  role="button"
                  disabled
                >
                  Tech Stack
                </a>
                <a
                  href="https://calorator.vercel.app/"
                  className="btn btn-success my-2 mx-2"
                  role="button"
                >
                  Go to Calorator
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
