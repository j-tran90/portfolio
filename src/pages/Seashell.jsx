import ProgressBar from "react-bootstrap/ProgressBar";
import "../stylesheets/Projects.css";

export default function Seashell() {
  const htmlStack = 70;
  const cssStack = 90;
  const sassStack = 5;
  const bootstrapStack = 30;
  const reactStack = 90;
  const jsStack = 75;
  const exStack = 50;
  const firebaseStack = 30;
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="display-1 pt-3 pt-md-5 pb-3 pb-md-5">SeaShell</div>
        <div className="display-6 pb-4">Overview</div>
        <ul>
          A simple open chat application design to be step stones for a more
          intricate chat application. The goal is to expand the chat to allow
          group conversations. The objective is to keep it lightweight so that
          it can be integrated into a larger application.
        </ul>
        <div className="text-center p-5">
          <a
            type="button"
            className="btn btn-primary fw-bold"
            href="https://seashell.vercel.app/"
          >
            Visit SeaShell
          </a>
        </div>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={sassStack} label={`${sassStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={bootstrapStack} label={`${bootstrapStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={exStack} label={`${exStack}%`} />
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
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={firebaseStack} label={`${firebaseStack}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}
