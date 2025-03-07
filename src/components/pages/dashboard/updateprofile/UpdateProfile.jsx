import { Link } from 'react-router-dom'
import "./update.css"

function UpdateProfile() {
    return (
        <div className="container">
            <h2 className="account-title"> Live-Class</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
                    <li className="breadcrumb-item">
                        <i className="bi bi-house-door-fill me-2"></i>
                        <Link to="/user">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Account-Update
                    </li>
                </ol>
            </nav>
            <div className="mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-person-circle me-2"></i> Update Account
          </h5>
          {/* <button className="btn btn-light btn-sm">×</button> */}
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">User Name *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-telephone"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter your contact number" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Gender *</label>
              <div>
                <input type="radio" name="gender" id="male" className="form-check-input" />
                <label htmlFor="male" className="form-check-label ms-2 me-3">Male</label>
                <input type="radio" name="gender" id="female" className="form-check-input" />
                <label htmlFor="female" className="form-check-label ms-2">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Country *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-plus"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter country" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">State *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-plus"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter state" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">City *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-plus"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter city" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address *</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-plus"></i>
                </span>
                <input type="text" className="form-control" placeholder="Enter address" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Photo *</label>
              <input type="file" className="form-control" />
            </div>

            <div className="text-center">
              <Link to={"/user/account-info"} type="submit" className="btn btn-primary bg-primary1 mt-2">Update</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    )
}

export default UpdateProfile