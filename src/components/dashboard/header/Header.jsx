/* eslint-disable react/prop-types */
import "./Header.css";
import { useAuth } from "../../context/AuthContext"; // Import the auth context
import defaultProfilePic from "../../../assets/Instractor/defaultimage.png";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
const { currentUser } = useAuth(); // Get the current user from auth context
  return (
    <nav className="header-navbar d-flex d-sm-flex-column align-items-center justify-content-between">
      <div className="brand">
        <Link to="/user" style={{ textDecoration: "none", marginRight: "10px" }}>
          <span className="brand-name primary1">Pavitram</span>
          <span className="brand-highlight" style={{ marginLeft: "10px" }}>Yoga</span>
        </Link>
    </div>
    <div className="hamburger-menu d-block" onClick={toggleSidebar}>
        <i className="fa fa-bars marginleft-3"></i>
    </div>
      <ul className="nav ms-auto d-flex align-items-center justify-content-end">
        {/* Notification Bell */}
        <li className="nav-item">
          <a href="#" className="notification-icon">
            <i className="fa-solid fa-bell text-dark"></i> <span className="badge text-danger">4</span>
          </a>
        </li>

        <li className="nav-item dropdown">
          <button className="profile-toggle" type="button">
            <img src={currentUser?.profileImage || defaultProfilePic} alt="Profile" className="profile-pic img-fluid rounded-4 bg-white" /> {currentUser?.fullName || "Guest User"}
          </button>
          <ul className="dropdown-menu">
            <li><a href="#" className="dropdown-item"><i className="fa-solid fa-right-from-bracket me-2"></i>Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
