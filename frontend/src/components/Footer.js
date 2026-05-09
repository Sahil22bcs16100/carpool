import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}

        <div className="footer-section">

          <h2 className="footer-logo">
            <FaCar /> GoPool
          </h2>

          <p>
            GoPool helps people share rides, reduce travel costs,
            and make commuting smarter and more sustainable.
          </p>

        </div>


        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/find">Find Ride</Link>
            </li>

            <li>
              <Link to="/offer">Offer Ride</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

          </ul>

        </div>


        {/* Support Links */}

        <div className="footer-section">

          <h3>Support</h3>

          <ul>

            <li>
              <Link to="/support">Help Center</Link>
            </li>

            <li>
              <Link to="/tickets">My Tickets</Link>
            </li>

            <li>
              <a href="mailto:support@gopool.com">
                support@gopool.com
              </a>
            </li>

          </ul>

        </div>


        {/* Social */}

        <div className="footer-section">

          <h3>Connect</h3>

          <div className="footer-social">

            <a
              href="https://github.com/vanshika27-ks"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/vanshikasalaria"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} GoPool. All rights reserved.
        </p>

      </div>
      {/* Legal */}

<div className="footer-section">

<h3>Legal</h3>

<ul>

  <li>
    <Link to="/terms">Terms & Conditions</Link>
  </li>

  <li>
    <Link to="/privacy">Privacy Policy</Link>
  </li>

</ul>

</div>

    </footer>
  );
}

export default Footer;