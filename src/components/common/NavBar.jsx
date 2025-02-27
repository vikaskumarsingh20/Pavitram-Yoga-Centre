import colors from "../../styles/colors";
import { useCart } from "../../components/context/CartContext";
import logo from "../../assets/images/pavitramlogo.jpeg";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
const { cart } = useCart();
const [cartCount, setCartCount] = useState(0);
const [animate, setAnimate] = useState(false);

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

/* CSS for cart badge and animation */
/* Add this to navbar.css, including here for reference */
/*
.cart-icon-container {
display: inline-block;
}

.cart-badge {
position: absolute;
top: -8px;
right: -8px;
background-color: #f00;
color: white;
border-radius: 50%;
width: 20px;
height: 20px;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
}

.badge-bounce {
animation: badge-bounce-animation 0.5s;
}

@keyframes badge-bounce-animation {
0% { transform: scale(1); }
50% { transform: scale(1.5); }
100% { transform: scale(1); }
}
*/
