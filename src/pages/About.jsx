import "../stylesheets/About.css";
import Loader from "../components/Loader";

function About() {
  return (
    <>
      <Loader />
      <div className="container">
        <div className="display-1 text-center p-5">
          About Me <i className="bi bi-arrow-down-right-square display-6"></i>
        </div>
        <i className="bi bi-chat-square-dots-fill display-6"></i>
        <ul>
          <li>
            My name is <strong>John Tran</strong> and I am full stack developer.
            I graduated Centennial College for Software Engineering Technician.
            I currently live in Windsor, Ontario, and have lived here for 23
            years. I worked as a broker in the Property & Casualty insurance for
            7 years. Throughout my years in the insurance industry, I've noticed
            the fastest growing companies are the ones that utilizes modern
            technology. This realization motivated me to pursue a career in web
            and software development.
          </li>
        </ul>

        <div className="pb-5 pt-5">
          <div className="circular--portrait center--portrait">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fprofile-pic.png?alt=media&token=8989e48e-43dd-4a48-8b5a-ca3a3ab6ae2e"
              loading="lazy"
              alt="A portrait of myself being optimistic"
            />
          </div>
        </div>
        {/* Hidden until integrated */}
        <div className="container text-center pb-5 d-none">
          <a className="btn btn-primary" href="#" role="button">
            My Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
