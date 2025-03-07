import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaFileAlt, FaKey, FaShoppingCart, FaVideo, FaQuestionCircle } from "react-icons/fa";
import "./sidebar.css";
import "../dashboard.css"
const Sidebar = ({ isVisible }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <div className={`sidebar-container ${isVisible ? 'visible' : ''}`}>
            <div className="sidebar-header">
            </div>

            <div className="sidebar-content">
                <ListGroup variant="flush" className="sidebar-menu">
                    <Link to="/user/profile" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/profile") ? "active" : ""} d-flex`}>
                            <div className="item-icon me-2"><FaUser /></div>
                            <div className="item-text">Profile</div>
                        </ListGroup.Item>
                    </Link>

                    <Link to="/user/account-info" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/account-info") ? "active" : ""} d-flex`}>
                            <div className=" me-2"><FaFileAlt /></div>
                            <div className="item-text">Account Info</div>
                        </ListGroup.Item>
                    </Link>

                    <Link to="/user/change-password" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/change-password") ? "active" : ""} d-flex`}>
                            <div className=" me-2"><FaKey /></div>
                            <div className="item-text">Change Password</div>
                        </ListGroup.Item>
                    </Link>

                    <Link to="/user/orders" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/orders") ? "active" : ""} d-flex`}>
                            <div className=" me-2"><FaShoppingCart /></div>
                            <div className="item-text">View Orders</div>
                        </ListGroup.Item>
                    </Link>

                    <Link to="/user/live-classes" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/live-classes") ? "active" : ""} d-flex`}>
                            <div className=" me-2"><FaVideo /></div>
                            <div className="item-text">Live Classes</div>
                        </ListGroup.Item>
                    </Link>

                    <Link to="/user/help" className="menu-link">
                        <ListGroup.Item className={`sidebar-item ${isActive("/user/help") ? "active" : ""} d-flex`}>
                            <div className=" me-2"><FaQuestionCircle /></div>
                            <div className="item-text">Help</div>
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
                <div className="sidebar-footer fixed-bottom">
                    <span className="text-muted border-top p-3"> &copy; 2025 Pavitram Yoga</span>
                </div>
            </div>


        </div>
    );
};

export default Sidebar;

