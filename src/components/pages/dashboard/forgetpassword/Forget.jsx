import { Link } from 'react-router-dom'

function Forget() {
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
            Forget-Password
          </li>
        </ol>
      </nav>
      <div className="card shadow-lg ">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
          <i className="bi bi-key-fill me-2"></i>  Reset Your Password
          </h5>
        </div>

        <form className='p-3'>
          <div className="mb-3 mt-2">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>Previous Password</label>
            <input type="password" className="form-control" placeholder="Enter previous password" required />
          </div>

          <div className="mb-3 mt-2">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>New Password</label>
            <input type="password" className="form-control" placeholder="Enter new password" required />
          </div>

          <div className="mb-3 mt-2">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm new password" required />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary bg-primary1 mt-3 mb-2   text-center">
              Reset Password <i className="bi bi-arrow-right-circle me-2"></i> 
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forget