import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
    <div className="sidebar">
    <Link to="/user">
        <h3 className="brand">Pavitram <span className="highlight">Yoga</span></h3>
    </Link>
        <ListGroup variant="flush">
        <Link to="/user/profile">
            <ListGroup.Item className="sidebar-item">👤 Profile</ListGroup.Item>
        </Link>
        <Link to="/user/account-info">
            <ListGroup.Item className="sidebar-item">📂 Account Info</ListGroup.Item>
        </Link>
        <Link to="/user/change-password">
            <ListGroup.Item className="sidebar-item">🔑 Change Password</ListGroup.Item>
        </Link>
        <Link to="/user/orders">
            <ListGroup.Item className="sidebar-item">🛒 View Orders</ListGroup.Item>
        </Link>
        <Link to="/user/live-classes">
            <ListGroup.Item className="sidebar-item">🎥 Live Classes</ListGroup.Item>
        </Link>
        <Link to="/help">
            <ListGroup.Item className="sidebar-item">❓ Help</ListGroup.Item>
        </Link>
        </ListGroup>
    </div>
    );
};

export default Sidebar;
