import ProgressBar from "react-bootstrap/ProgressBar";
import "../stylesheets/Projects.css";

export default function Nhoracing() {
  const htmlStack = 70;
  const cssStack = 90;
  const reactStack = 80;
  const jsStack = 20;
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="display-1 pt-3 pt-md-5 pb-3 pb-md-5">Nho Racing</div>
        <p className="display-6 pb-2">Overview</p>
        <p>
          <ul>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ul>
          <div className="text-center p-5">
            <a
              type="button"
              className="btn btn-danger fw-bold"
              href="https://nhoracing.vercel.app/"
            >
              Visit Nho Racing
            </a>
          </div>
        </p>
        <p className="display-6 pb-2">Technology Stack</p>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={htmlStack} label={`${htmlStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={cssStack} label={`${cssStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={reactStack} label={`${reactStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={jsStack} label={`${jsStack}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}
