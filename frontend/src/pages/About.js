import "../styles/about.css";
import developer from "../assets/Vanshika1.jpeg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <h1>About GoPool</h1>

        <p>
          GoPool is a community-driven carpool coordination platform designed to
          make daily commuting easier, cheaper, and more sustainable.
          By connecting drivers with empty seats to passengers traveling in
          the same direction, GoPool reduces traffic congestion and
          promotes shared mobility.
        </p>

      </section>


      {/* WHY GOPOOL */}
      <section className="about-section">

        <h2>Why GoPool?</h2>

        <div className="about-cards">

          <div className="about-card">
            <h3>Save Travel Costs</h3>
            <p>
              Share rides with people going the same way and reduce your
              daily transportation expenses.
            </p>
          </div>

          <div className="about-card">
            <h3>Reduce Traffic</h3>
            <p>
              Fewer vehicles on the road means less congestion and faster
              travel for everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>Eco-Friendly Travel</h3>
            <p>
              Carpooling reduces fuel consumption and lowers carbon
              emissions, helping the environment.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="about-section">

        <h2>How GoPool Works</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <p>Create an account and join the GoPool community.</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Find available rides or offer your own ride.</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Connect with riders and travel together safely.</p>
          </div>

        </div>

      </section>

      {/* TECH STACK */}

<section className="tech-section">

<h2>Tech Stack</h2>

<div className="tech-grid">

  <div className="tech-card">
    <FaReact className="tech-icon react"/>
    <h3>React</h3>
    <p>Frontend user interface</p>
  </div>

  <div className="tech-card">
    <FaNodeJs className="tech-icon node"/>
    <h3>Node.js</h3>
    <p>Backend server environment</p>
  </div>

  <div className="tech-card">
    <SiExpress className="tech-icon express"/>
    <h3>Express</h3>
    <p>REST API framework</p>
  </div>

  <div className="tech-card">
    <SiMongodb className="tech-icon mongo"/>
    <h3>MongoDB</h3>
    <p>Database for storing rides & users</p>
  </div>

</div>

</section>

{/* PROJECT ARCHITECTURE */}

<section className="architecture-section">

  <h2>System Architecture</h2>

  <div className="architecture-flow">

    <div className="arch-box">
      React Frontend
      <p>User interface for riders & drivers</p>
    </div>

    <div className="arrow">→</div>

    <div className="arch-box">
      Node.js + Express
      <p>Handles APIs and authentication</p>
    </div>

    <div className="arrow">→</div>

    <div className="arch-box">
      MongoDB Database
      <p>Stores users, rides and bookings</p>
    </div>

  </div>

</section>


      {/* DEVELOPER */}
{/* <section className="developer-section">

<h2>Meet the Developer</h2>

<div className="developer-card">

  <img src={developer} alt="Vanshika Salaria"/>

  <div className="developer-info">

    <h3>Vanshika Salaria</h3>

    <span className="role">
      Full Stack Developer
    </span>

    <p>
      Passionate about building scalable web applications using modern
      technologies like React, Node.js, and MongoDB. Focused on creating
      intuitive user experiences and efficient backend systems.
    </p>

    <p>
      GoPool was developed as a full-stack ride-sharing platform to
      demonstrate system architecture, authentication flows, and modern
      frontend development practices.
    </p>

    <div className="developer-links">

      <a 
        href="https://github.com/vanshika27-ks" 
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a 
        href="https://linkedin.com/vanshika-salaria"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

    </div>

  </div>

</div>

</section> */}

    </div>
  );
}

export default About;