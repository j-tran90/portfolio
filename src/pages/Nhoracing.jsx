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
        <div className="display-6 pb-4">Overview</div>

        <ul>
          A freelance project that was commissioned to design an attractive
          static webpage to promote the brand's shop and social media. The goal
          is to eventually make it a hub for other social media platform for the
          client.
        </ul>
        <div className="text-center p-5">
          <a
            type="button"
            className="btn btn-danger fw-bold"
            href="https://nhoracing.vercel.app/"
          >
            Go to Nho Racing
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
