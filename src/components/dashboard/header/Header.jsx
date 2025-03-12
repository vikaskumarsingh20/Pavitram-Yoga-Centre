/* eslint-disable react/prop-types */
import "./Header.css";
import { useAuth } from "../../context/AuthContext";  
import { useNotification } from "../../context/NotificationContext";  
import defaultProfilePic from "../../../assets/Instractor/defaultimage.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = ({ toggleSidebar }) => {
const { currentUser, logout } = useAuth();  
const { 
  notifications, 
  unreadCount, 
  markAsRead, 
  markAllAsRead, 
  formatTime 
} = useNotification();
const navigate = useNavigate();
const [showNotifications, setShowNotifications] = useState(false);
const notificationRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const handleNotificationClick = (notification) => {
  markAsRead(notification.id);
  if (notification.link) {
    navigate(notification.link);
  }
  setShowNotifications(false);
};

const handleLogout = () => {
  logout();
  navigate('/home/login'); // Redirect to login page after logout
};

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
        <li className="nav-item dropdown" ref={notificationRef}>
          <button 
            className="notification-icon btn" 
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className="fa-solid fa-bell text-dark"></i> 
            {unreadCount > 0 && <span className="badge text-danger">{unreadCount}</span>}
          </button>
          
          {showNotifications && (
            <div className="notifications-dropdown">
              <div className="notifications-header d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Notifications</h6>
                {unreadCount > 0 && (
                  <button 
                    className="mark-all-read btn btn-sm text-primary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      markAllAsRead();
                    }}
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              
              <div className="notifications-body">
                {notifications.length === 0 ? (
                  <div className="no-notifications text-center py-3">
                    <p className="text-muted mb-0">No notifications</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`notification-item ${!notification.read ? 'unread' : ''}`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="notification-icon-container">
                        {notification.type === "info" && (
                          <i className="fa-solid fa-info-circle text-info"></i>
                        )}
                        {notification.type === "warning" && (
                          <i className="fa-solid fa-exclamation-triangle text-warning"></i>
                        )}
                        {notification.type === "success" && (
                          <i className="fa-solid fa-check-circle text-success"></i>
                        )}
                      </div>
                      <div className="notification-content">
                        <p className="notification-text mb-1">{notification.message}</p>
                        <small className="notification-time text-muted">
                          {formatTime(notification.time)}
                        </small>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </li>

        <li className="nav-item dropdown">
          <button className="profile-toggle" type="button">
            <img src={currentUser?.profileImage || defaultProfilePic} alt="Profile" className="profile-pic img-fluid rounded-4 bg-white" /> {currentUser?.fullName || "Guest User"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button 
                className="dropdown-item" 
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket me-2"></i>
                Logout
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
 
export default Header;
