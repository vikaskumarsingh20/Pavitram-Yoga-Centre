import { Link } from 'react-router-dom'
import './ViewOrder.css'
import "../dashboard.css"

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
      <div className="mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-eye me-2"></i> View Order
          </h5>
          {/* <button className="btn btn-light btn-sm">×</button> */}
        </div>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>Sno.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Total Price</th>
                  <th>Payment</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="text-center">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <span>Showing 0 to 0 of 0 entries</span>
            <div>
              <button className="btn btn-outline-secondary btn-sm me-2">
                Previous
              </button>
              <button className="btn btn-outline-secondary btn-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewOrder