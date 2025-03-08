import { Link } from "react-router-dom";
import "./AccountInfo.css"; 
import profilePic from "../../../assets/Instractor/guruji.jpg";
import "../dashboard.css"
import { useAuth } from "../../context/AuthContext";
const AccountInfo = () => {
  
const { currentUser } = useAuth();
  return (
    <div className="container-fluid">
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
        <div className="card-header bg-primary1 text-white">
          <h5 className="mb-0">📌 Account Info</h5>
        </div>
        <div className="card-body row align-items-center">
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
  <table className="table table-bordered align-middle">
    <tbody>
    <tr>
        <th className="text-start align-middle w-25">
          <i className="bi bi-person-fill me-2"></i> Name
        </th>
        <td className="text-start">{currentUser?.fullName || "Not provided"}</td>
    </tr>
      <tr>
        <th className="text-start align-middle w-25">
          <i className="bi bi-envelope-fill me-2"></i> E-mail
        </th>
        <td className="text-start">{currentUser?.email || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="bi bi-telephone-fill me-2"></i> Phone Number
        </th>
        <td className="text-start">{currentUser?.phone || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="bi bi-gender-ambiguous me-2"></i> Gender
        </th>
        <td className="text-start">{currentUser?.gender || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="bi bi-globe me-2"></i> Country
        </th>
        <td className="text-start">{currentUser?.country || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="bi bi-map-fill me-2"></i> State
        </th>
        <td className="text-start">{currentUser?.state || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="fa fa-map-marker me-2"></i> City
        </th>
        <td className="text-start">{currentUser?.city || "Not provided"}</td>
      </tr>
      <tr>
        <th className="text-start align-middle">
          <i className="bi bi-house-door-fill me-2"></i> Address
        </th>
        <td className="text-start">{currentUser?.address || "Not provided"}</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>

        <div className="card-footer text-center">
          <Link to="/user/update_profile" className="btn btn-primary bg-primary1">Update Account</Link>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
