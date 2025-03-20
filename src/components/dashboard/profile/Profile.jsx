import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import "./profile.css"

function Profile() {
  const { currentUser } = useAuth();
  
  // Default profile image if none is available
  const profileImage = currentUser?.profileImage || "https://via.placeholder.com/150?text=Profile";
  
  return (
    <div className="container-fluid">
      <h2 className="account-title">Profile</h2>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Profile
          </li>
        </ol>
      </nav>

      <div className="profile-container">
        {/* Profile Header with Image */}
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150?text=Profile"
              }}
            />
            <div className="profile-status">
              <span className="status-dot"></span>
              <span className="status-text">Active</span>
            </div>
          </div>
          
          <div className="profile-header-info">
            <h3 className="profile-name">{currentUser?.fullName || 'User'}</h3>
            <p className="profile-subtitle">
              <i className="bi bi-envelope-fill me-2"></i>
              {currentUser?.email || 'N/A'}
            </p>
            <div className="profile-quick-actions">
              <Link to="/user/update_profile" className="btn btn-primary btn-sm action-btn">
                <i className="bi bi-pencil-fill me-1"></i> Edit Profile
              </Link>
              <button className="btn btn-outline-primary btn-sm action-btn">
                <i className="bi bi-download me-1"></i> Download Info
              </button>
              <button className="btn btn-outline-secondary btn-sm action-btn">
                <i className="bi bi-shield-lock me-1"></i> Privacy Settings
              </button>
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-card">
            <div className="card-header">
              <h5><i className="bi bi-person-fill me-2"></i> Personal Information</h5>
            </div>
            <div className="card-content">
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-person me-2"></i> Full Name
                </div>
                <div className="info-value">{currentUser?.fullName || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-envelope me-2"></i> Email
                </div>
                <div className="info-value">{currentUser?.email || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-phone me-2"></i> Phone
                </div>
                <div className="info-value">{currentUser?.phone || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-gender-ambiguous me-2"></i> Gender
                </div>
                <div className="info-value">{currentUser?.gender || 'N/A'}</div>
              </div>
            </div>
          </div>
          
          <div className="profile-card">
            <div className="card-header">
              <h5><i className="bi bi-geo-alt-fill me-2"></i> Location Information</h5>
            </div>
            <div className="card-content">
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-map me-2"></i> Address
                </div>
                <div className="info-value">{currentUser?.address || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-building me-2"></i> City
                </div>
                <div className="info-value">{currentUser?.city || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-map-fill me-2"></i> State
                </div>
                <div className="info-value">{currentUser?.state || 'N/A'}</div>
              </div>
              <div className="info-row">
                <div className="info-label">
                  <i className="bi bi-globe me-2"></i> Country
                </div>
                <div className="info-value">{currentUser?.country || 'N/A'}</div>
              </div>
            </div>
          </div>
          
          <div className="profile-card">
            <div className="card-header">
              <h5><i className="bi bi-gear-fill me-2"></i> Account Settings</h5>
            </div>
            <div className="card-content">
              <div className="settings-buttons">
                <Link to="/user/update_profile" className="btn btn-outline-primary btn-lg w-100 mb-2">
                  <i className="bi bi-pencil-square me-2"></i> Update Profile
                </Link>
                <Link to="/user/change-password" className="btn btn-outline-secondary btn-lg w-100 mb-2">
                  <i className="bi bi-lock me-2"></i> Change Password
                </Link>
                <button className="btn btn-outline-danger btn-lg w-100">
                  <i className="bi bi-trash me-2"></i> Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
