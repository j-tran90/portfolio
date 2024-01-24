import "../stylesheets/Navbar.css";
import Navlinks from "./Navlinks";
import Socials from "./Socials";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container navbar-custom">
          <a className="navbar-brand" href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Flogo5.png?alt=media&token=5b13bb75-871f-422b-8c01-d84dc305b155"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar ms-auto">
              <Navlinks />
            </div>
            <Socials />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
