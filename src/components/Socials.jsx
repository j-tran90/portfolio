export default function Socials() {
  return (
    <>
      <div className="row p-3">
        <div className="col">
          <a className="nav-link px-2" href="https://github.com/j-tran90">
            <img
              className="socials"
              aria-label="GitHub"
              title="GitHub"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
        </div>
        <div className="col">
          <a
            className="nav-link px-2"
            href="https://www.linkedin.com/in/john-tran-486ab6235/"
          >
            <img
              className="socials"
              aria-label="LinkedIn"
              title="LinkedIn"
              src="
                  https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </>
  );
}
