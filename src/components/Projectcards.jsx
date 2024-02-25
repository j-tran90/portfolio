import "../stylesheets/Projectcards.css";

function ProjectCards() {
  return (
    <>
      <div className="container-fluid pb-5">
        <div className="container p-5 display-1 text-center">Portfolio</div>

        <div className="card-group">
          <div className="card">
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-orange-fluid-wave-background_.jpg?alt=media&token=bb03a23c-6e9d-4b82-b9b9-123f58c353c4"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="display-4 card-title">CourierTek</div>
              <p className="card-text">
                A Free lance project. A courier tracking solution for business
                all types and sizes.
              </p>
              <a className="btn btn-warning" href="/couriertek" role="button">
                Tech Stack
              </a>
              <a
                className="btn btn-warning mx-2"
                href="              https://glamorous-tan-slacks.cyclic.app/"
                role="button"
              >
                Go to CourierTek
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-blue-gradient-fluid-background_6736876.jpg?alt=media&token=b9c03862-0d66-4c04-8fbd-9305742ccad9"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="display-4 card-title">SeaShell</div>
              <p className="card-text">
                A light chat application. A solo full stack project using React,
                Javascript, Boostrap, and Firebase.
              </p>
              <a className="btn btn-info" href="/seashell" role="button">
                Tech Stack
              </a>
              <a
                className="btn btn-info mx-2"
                href="https://seashell.vercel.app/"
                role="button"
              >
                Go to SeaShell
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fvecteezy_abstract-red-fluid-wave-background_.jpg?alt=media&token=dabfb2f6-3770-4e7e-9f84-b27e4d5fdda1"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="display-4 card-title">Nho Racing</div>
              <p className="card-text">
                A freelance project taking on client's request to create a
                simple static webpage to showcase an imported vehicle.
              </p>
              <a
                className="btn btn-danger my-2"
                href="/nhoracing"
                role="button"
              >
                Tech Stack
              </a>
              <a
                className="btn btn-danger mx-2 "
                href="https://nhoracing.vercel.app/"
                role="button"
              >
                Go to Nho Racing
              </a>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fcalorator.png?alt=media&token=bd3dee5a-dadd-4638-9115-33deff977b71"
              alt="Card image cap"
            />
            <div className="card-body">
              <div className="display-4 card-title">Calorator</div>
              <p className="card-text">
                Calorie tracker. A solo full stack project using React,
                Javascript, and Firebase.
              </p>
              <div className="align-items-end">
                <a
                  className="btn btn-success"
                  href="/"
                  role="button"
                  disabled={true}
                >
                  Tech Stack
                </a>
                <a
                  className="btn btn-success mx-2"
                  href="https://calorator.vercel.app/"
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
