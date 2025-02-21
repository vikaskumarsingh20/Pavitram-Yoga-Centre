import colors from "../../styles/colors";
import logo from "../../assets/images/pavitramlogo.jpeg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header
        style={{ backgroundColor: colors.navcolor }}
        className="container-fluid py-3"
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
              to="/cart"
            >
              Cart
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to="/login"
              className="text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-md navbar-light shadow">
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
                  className="nav-link dropdown-toggle"
                  to="/about"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      {/* <i className="bi bi-chevron-down rotate-180"></i> */}
                      Pavitram
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/our-story">
                      {/* <i className="bi bi-chevron-down rotate-180"></i> */}
                      Acharya Vivekaditya
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/our-team">
                      {/* <i className="bi bi-chevron-down rotate-180"></i> */}
                      Our Centers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trainer">
                  Trainers Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/yoga">
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
                <Link className="nav-link" to="/upcoming-events">
                  Our Upcoming Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
