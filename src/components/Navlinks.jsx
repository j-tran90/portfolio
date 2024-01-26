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
              <a
                className="dropdown-item"
                href="https://seashell-lft5.vercel.app/"
              >
                Sea Shell
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="https://nhoracing.vercel.app/">
                Nho Racing
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
        <a className="nav-link disabled" href="/contact">
          Contact
        </a>
      </div>
    </>
  );
}
