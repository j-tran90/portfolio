import "../stylesheets/About.css";

function About() {
  return (
    <>
      <div className="container">
        <h1 className="display-1 text-center p-5">A little About Me</h1>
        <p>
          My name is <strong>John Tran</strong> and I am full stack developer. I
          graduated Centennial College for Software Engineering Technician. I
          currently live in Windsor, Ontario, and have lived here for 23 years.
          I worked as a broker in the Property & Casualty insurance for 7 years.
          Throughout my years in the insurance industry, I've noticed the
          fastest growing companies are the ones that utilizes modern
          technology. This realization motivated me to pursue a career in web
          and software development.
        </p>

        <div className="pb-5 pt-5">
          <div className="circular--portrait center--portrait">
            <img src="./src/assets/profile-pic.png" />
          </div>
        </div>
        <div className="container text-center pb-5">
          <a className="btn btn-primary" href="#" role="button">
            My Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
