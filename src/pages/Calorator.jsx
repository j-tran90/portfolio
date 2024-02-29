import ProgressBar from "react-bootstrap/ProgressBar";
import "../stylesheets/Projects.css";

export default function Calorator() {
  const htmlStack = 1;
  const cssStack = 4.9;
  const sassStack = 5;
  const bootstrapStack = 30;
  const reactStack = 94.1;
  const jsStack = 94.1;
  const exStack = 0;
  const firebaseStack = 100;
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="display-1 pt-3 pt-md-5 pb-3 pb-md-5">Calorator</div>
        <div className="display-6 pb-4">Overview</div>
        <ul>
          Calorator your go-to app for effortless calorie monitoring and healthy
          living! Our app is designed with simplicity in mind, making it easy
          for you to track your daily calorie intake with just a few taps.
          Whether you're aiming to lose weight, maintain a healthy lifestyle, or
          simply stay aware of what you eat, Calorator has you covered.
        </ul>
        <div className="display-6 pb-4">Completion Status: </div>
        <ul>Work In Progress - Pre-MVP</ul>
        <div className="display-6 pb-4">Testing Status:</div>
        <ul>Existing components passed</ul>
        <div className="text-center p-5">
          <a
            type="button"
            className="btn btn-success fw-bold"
            href="https://calorator.vercel.app/"
          >
            Go to Calorator
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
        {/* <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={sassStack} label={`${sassStack}%`} />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={bootstrapStack} label={`${bootstrapStack}%`} />
          </div>
        </div> */}
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
