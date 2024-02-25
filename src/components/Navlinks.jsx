import { Link } from "react-router-dom";

export default function Navlinks() {
  return (
    <>
      <div className="navbar-nav ">
        <ul>
          <li className="nav-item dropdown ">
            <Link
              as={Link}
              to="#"
              className="nav-link dropdown-toggle active"
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
                <Link as={Link} to="/couriertek" className="dropdown-item">
                  CourierTek
                </Link>
              </li>
              <li>
                <Link as={Link} to="/seashell" className="dropdown-item">
                  Sea Shell
                </Link>
              </li>
              <li>
                <Link as={Link} to="/nhoracing" className="dropdown-item">
                  Nho Racing
                </Link>
              </li>
              <li>
                <Link as={Link} to="#" className="dropdown-item disabled">
                  Calorator
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <a className="nav-link" href="/#skills">
          Skills
        </a>
        <a className="nav-link" href="/#about">
          About
        </a>
        {/* <a className="nav-link disabled" href="/contact">
          Contact
        </a> */}
      </div>
    </>
  );
}
