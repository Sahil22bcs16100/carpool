import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { FaInfoCircle, FaHeadset } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const storedName = localStorage.getItem("username");
  
    if (loginStatus === "true") {
      setIsLoggedIn(true);
      setUsername(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <FaCar className="logo-icon"/>
        <span>GoPool</span>
      </div>

      <div className="nav-right">

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Show only when logged in */}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/find">
                  <MdOutlineDirectionsCar/> Find Ride
                </Link>
              </li>

              <li>
                <Link to="/offer">
                  <FaCar/> Offer Ride
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/about">
              <FaInfoCircle/> About
            </Link>
          </li>

          <li>
            <Link to="/support">
              <FaHeadset/> Support
            </Link>
          </li>

        </ul>

        <div className="auth-buttons">

{!isLoggedIn ? (
  <>
    <Link to="/login">
      <button className="login-btn">
        <RiUserLine/> Login
      </button>
    </Link>

    <Link to="/signup">
      <button className="signup-btn">
        Sign Up
      </button>
    </Link>
  </>
) : (
  <div className="profile-menu">

    <div
      className="profile-btn"
      onClick={() => setShowMenu(!showMenu)}
    >
      👤 {username} ▼
    </div>

    {showMenu && (
  <div className="dropdown-menu">

    <Link to="/myrides">
      My Rides
    </Link>

    <Link to="/tickets">
  <FaTicketAlt /> My Tickets
</Link>

    <Link to="/profile">
      Profile
    </Link>

    <button onClick={handleLogout}>
      Logout
    </button>

  </div>
)}

  </div>
)}

</div>
      </div>

    </nav>
  );
}

export default Navbar;