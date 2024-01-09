import "../stylesheets/Navbar.css";
//import Link from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light pb-4">
        <div className="container navbar-custom">
          <a className="navbar-brand" href="/home">
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
            <div className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://glamorous-tan-slacks.cyclic.app/"
                    >
                      CourierTek
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sea Shell
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Porsche Fanpage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tix
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link" href="/#skills">
                Skills
              </a>
              <a className="nav-link" href="/#about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              <a className="nav-link px-2" href="https://github.com/j-tran90">
                <img
                  className="socials"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </a>
              <a
                className="nav-link px-2"
                href="https://www.linkedin.com/in/john-tran-486ab6235/"
              >
                <img
                  className="socials"
                  src="
                  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                />
              </a>
            </div>
          </div>
          <a
            className="nav-link px-3 d-none"
            href="https://github.com/j-tran90"
          >
            <img
              className="socials"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          <a
            className="nav-link px-3 d-none"
            href="https://www.linkedin.com/in/john-tran-486ab6235/"
          >
            <img
              className="socials"
              src="
                  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
