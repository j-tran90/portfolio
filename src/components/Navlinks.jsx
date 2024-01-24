export default function Navlinks() {
  return (
    <>
      <div className="navbar-nav ">
        <li className="nav-item dropdown ">
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
              <a className="dropdown-item" href="/couriertek">
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
      </div>
      <a className="nav-link px-3 d-none" href="https://github.com/j-tran90">
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
    </>
  );
}
