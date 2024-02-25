import "../stylesheets/About.css";

function About() {
  return (
    <>
      <div className="container">
        <div className="display-1 text-center p-5">About Me</div>
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/portfolio%2Fprofile-pic.png?alt=media&token=f711aefe-95aa-44eb-915b-c9f3389b8640"
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
