import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";
import Navlinks from "./Navlinks";
import Socials from "./Socials";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container navbar-custom">
          <Link to="/" aria-label="Home" className="navbar-brand">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Flogo5.webp?alt=media&token=92f9898a-457b-4886-a807-b0d82704fc7b"
              alt="..."
            />
          </Link>
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
