import Socials from "./socials";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-light border-top">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 container">
          <p className="col-md-4 mb-0 text-muted">© 2023 John Tran</p>

          <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <Socials />
          </div>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/skills" className="nav-link px-2 text-muted">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-muted">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link px-2 text-muted">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
