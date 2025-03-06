import { Link } from "react-router-dom";
import "./AccountInfo.css"; 
import profilePic from "../../../../assets/Instractor/guruji.jpg";// Import the CSS file

const AccountInfo = () => {
  return (
    <div className="container">
      <h2 className="account-title">Account Info</h2>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
          <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Account Info
          </li>
        </ol>
      </nav>

      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">📌 Account Info</h5>
        </div>
        <div className="card-body row">
          {/* Profile Image */}
          <div className="col-md-4 text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="img-thumbnail"
              style={{ minHeight: "200px", maxHeight: "200px" }}
            />
          </div>

          {/* Account Details */}
          <div className="col-md-8">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Username</th>
                  <td>Delilah Dillon</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>zaqar@mailinator.com</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>46</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Country</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>State</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>Consequuntur hic vel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer text-center">
          <button className="btn btn-primary">Update Account</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
