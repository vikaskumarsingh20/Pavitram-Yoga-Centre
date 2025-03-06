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
  </div>
  )
}

export default LiveClass