import { Link } from 'react-router-dom'

function ViewOrder() {
  return (
    <div className="container">
    <h2 className="account-title">Forget Password</h2>

    {/* Breadcrumb Navigation */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
        <li className="breadcrumb-item">
          <i className="bi bi-house-door-fill me-2"></i>
          <Link to="/user">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
           View-Order
        </li>
      </ol>
    </nav>
  </div>
  )
}

export default ViewOrder