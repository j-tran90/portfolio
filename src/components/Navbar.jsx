import "../stylesheets/Navbar.css";
import Navlinks from "./Navlinks";
import Socials from "./socials";
//import Link from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container navbar-custom">
          <a className="navbar-brand" href="/">
            <img src="./src/assets/logo5.png" alt="" />
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
