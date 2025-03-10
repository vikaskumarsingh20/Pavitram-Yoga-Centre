/* eslint-disable react/no-unescaped-entities */
import colors from "../../styles/colors";
import { useCart } from "../../components/context/CartContext";
import { useAuth } from "../../components/context/AuthContext";
import logo from "../../assets/images/pavitramlogo.jpeg";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
const { cart } = useCart();
const { currentUser, logout } = useAuth();
const [cartCount, setCartCount] = useState(0);
const [animate, setAnimate] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
const location = useLocation();

const isActive = (path) => {
    return location.pathname === path;
};

useEffect(() => {
    if (cart && cart.length > 0) {
    setCartCount(cart.length);
    setAnimate(true);
    
    const timeout = setTimeout(() => {
        setAnimate(false);
    }, 500);
    
    return () => clearTimeout(timeout);
    } else {
    setCartCount(0);
    }
}, [cart]);
  return (
    <div className="fixed-top">
        <header
        style={{ backgroundColor: colors.navcolor }}
        className="container-fluid py-3 header-top"
        >
        <div className="row justify-content-between align-items-center text-white">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+919999592971"
            >
              Enquire us 9999592971
            </a>
            <span className="mx-2">/</span>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+919717189911"
            >
              9717189911
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Link
              style={{ textDecoration: "none" }}
              className="me-3 text-white"
              to="/home/cart"
            >
            <div className="cart-icon-container position-relative">
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                {cartCount > 0 && (
                <span className={`cart-badge ${animate ? 'badge-bounce' : ''}`}>
                    {cartCount}
                </span>
                )}
                <span className="ms-1">Cart</span>
            </div>
            </Link>
            {currentUser ? (
            <div className="position-relative">
                <div 
                style={{ textDecoration: "none", cursor: "pointer" }}
                className="text-white d-flex align-items-center"
                onClick={() => setShowDropdown(!showDropdown)}
                >
                <FontAwesomeIcon icon={faUser} className="me-1" /> 
                {currentUser.email || "User"} <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                </div>
                {showDropdown && (
                <div className="position-absolute bg-white shadow rounded py-2 mt-1  " style={{ zIndex: 1000, right: 0, minWidth: "150px" }}>
                    <Link 
                    to="/user/account-info" 
                    className="dropdown-item text-decoration-none  text-dark py-1 px-3 "
                    onClick={() => setShowDropdown(false)}
                    >
                    Profile
                    </Link>
                    <div 
                    className="dropdown-item text-decoration-none text-dark py-1 px-3" 
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        logout();
                        setShowDropdown(false);
                    }}
                    >
                    Logout
                    </div>
                </div>
                )}
            </div>
            ) : (
            <Link
                style={{ textDecoration: "none" }}
                to="/home/login"
                className="text-white"
            >
                <FontAwesomeIcon icon={faUser} className="me-1" /> Login
            </Link>
            )}
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-md navbar-light shadow" style={{backgroundColor:"#fff"}}>
        <div className="container-fluid d-flex justify-content-end">
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-md-center justify-content-start gap-3"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item dropdown mt-0">
                <Link
                className={`nav-link ${isActive('/home/aboutus') ? 'active' : ''}`}
                to="/home/aboutus"
                role="button"
                aria-expanded="false"
                >
                About us <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item ${isActive('/home/aboutus') ? 'active' : ''}`} to="/home/aboutus">
                    Pavitram
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${isActive('/home/Acharya_VivekAditya') ? 'active' : ''}`} to="/home/Acharya_VivekAditya">
                    Acharya Vivekaditya
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${isActive('/home/our_centers') ? 'active' : ''}`} to="/home/our_centers">
                    Our Centers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home/Courses') ? 'active' : ''}`} to="/home/Courses">
                  Trainer's Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home/service') ? 'active' : ''}`} to="/home/service">
                  Our Yoga Services
                </Link>
              </li>
              <li className="d-none d-md-block">
                <Link className="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt=""
                    width="100"
                    height="80"
                    className="d-inline-block align-text-top"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home/upcoming_events') ? 'active' : ''}`} to="/home/upcoming_events">
                  Our Upcoming Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home/gallery') ? 'active' : ''}`} to="/home/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home/contactus') ? 'active' : ''}`} to="/home/contactus">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;