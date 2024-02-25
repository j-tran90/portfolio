import { HashLink as Link } from "react-router-hash-link";

export default function Navlinks() {
  return (
    <>
      <div className="navbar-nav nav-custom">
        <ul>
          <li className="nav-item dropdown ">
            <Link
              as={Link}
              to="#"
              className="nav-link dropdown-toggle active "
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </Link>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link to="/couriertek" className="dropdown-item">
                  CourierTek
                </Link>
              </li>
              <li>
                <Link to="/seashell" className="dropdown-item">
                  Sea Shell
                </Link>
              </li>
              <li>
                <Link to="/nhoracing" className="dropdown-item">
                  Nho Racing
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item disabled">
                  Calorator
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <Link to="/#skills" className="nav-link">
          Skills
        </Link>
        <Link to="/#about" className="nav-link">
          About
        </Link>
        {/* <a className="nav-link disabled" href="/contact">
          Contact
        </a> */}
      </div>
    </>
  );
}
