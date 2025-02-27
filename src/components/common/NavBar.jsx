import colors from "../../styles/colors";
import logo from "../../assets/images/pavitramlogo.jpeg";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
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
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/home/login"
              className="text-white"
            >
                <FontAwesomeIcon icon={faUser} className="me-1" /> Login
            </Link>
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
                className="nav-link"
                to="/home/aboutus"
                role="button"
                aria-expanded="false"
                >
                About us <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/home/aboutus">
                    Pavitram
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/home/Acharya_VivekAditya">
                    Acharya Vivekaditya
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/home/our_centers">
                    Our Centers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/Courses">
                  Trainer's Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/service">
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
                <Link className="nav-link" to="/home/upcoming_events">
                  Our Upcoming Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/contactus">
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
