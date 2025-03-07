import { Link } from "react-router-dom"

function Profile() {
  return (
    <div className="container">
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

      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-person-fill me-2"></i>  Profile
          </h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-envelope-fill me-2"></i> Email : <span className="fw-bold">example@example.com</span>
          </li>
          <li className="list-group-item">
            <i className="bi bi-phone-fill me-2"></i> Phone : <span className="fw-bold">123-456-7890</span>
          </li>
          <li className="list-group-item">
            <i className="bi bi-map-fill me-2"></i> Address : <span className="fw-bold">New York, USA</span>
          </li>
        </ul>
      
      </div>
    </div>
  )
}

export default Profile