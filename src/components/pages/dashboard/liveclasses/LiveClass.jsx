import { Link } from 'react-router-dom'

function LiveClass() {
  return (
    <div className="container">
      <h2 className="account-title"> Live-Class</h2>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Live-Class
          </li>
        </ol>
      </nav>
      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-camera-video-fill me-2"></i> Live Class
          </h5>
        </div>

        <div className="card-body">
          <span>Meeting URL : </span>
          <a href="#" className="text-decoration-none text-primary" target='_blank'>http://localhost:3000/user/live-classes</a>
        </div>
      </div>
    </div>
  )
}

export default LiveClass