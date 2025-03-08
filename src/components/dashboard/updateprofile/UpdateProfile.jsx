import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/context/AuthContext';
import "./update.css";

function UpdateProfile() {
    const { currentUser, updateUser, loading } = useAuth();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        gender: '',
        country: '',
        state: '',
        city: '',
        address: '',
        photo: null,
        profileImage: null
    });
    
    // Populate form with current user data when component mounts
    useEffect(() => {
        if (currentUser) {
            setFormData({
                fullName: currentUser.fullName || '',
                phone: currentUser.phone || '',
                email: currentUser.email || '',
                gender: currentUser.gender || '',
                country: currentUser.country || '',
                state: currentUser.state || '',
                city: currentUser.city || '',
                address: currentUser.address || '',
                photo: null,
                profileImage: currentUser.profileImage || null
            });
        }
    }, [currentUser]);
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            const file = files[0];
            setFormData(prev => ({
                ...prev,
                [name]: file
            }));
            
            // Convert image to base64 for storage
            if (file && name === 'photo') {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormData(prev => ({
                        ...prev,
                        profileImage: reader.result
                    }));
                };
                reader.readAsDataURL(file);
            }
        } else if (type === 'radio') {
            setFormData(prev => ({
                ...prev,
                gender: value
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare data for update (including profile image if available)
        const profileData = { ...formData };
        delete profileData.photo; // Remove the actual file object
        
        const success = await updateUser(profileData);
        if (success) {
            navigate('/user/account-info');
        }
    };
    
    return (
        <div className="container-fluid">
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
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <div className="input-group">
            <span className="input-group-text">
                <i className="bi bi-person"></i>
            </span>
            <input 
                type="text" 
                name="fullName"
                value={formData.fullName} 
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter your full name"
                required 
            />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Contact Number *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-telephone"></i>
                </span>
                <input 
                type="text"
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter your contact number"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Email *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-envelope"></i>
                </span>
                <input 
                type="email"
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter your email"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Gender *</label>
            <div>
                <input 
                type="radio" 
                name="gender" 
                id="male" 
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange} 
                className="form-check-input" 
                />
                <label htmlFor="male" className="form-check-label ms-2 me-3">Male</label>
                <input 
                type="radio" 
                name="gender" 
                id="female" 
                value="Female"
                checked={formData.gender === "female"}
                onChange={handleChange} 
                className="form-check-input" 
                />
                <label htmlFor="female" className="form-check-label ms-2">Female</label>
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Country *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-plus"></i>
                </span>
                <input 
                type="text"
                name="country" 
                value={formData.country}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter country"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">State *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-plus"></i>
                </span>
                <input 
                type="text"
                name="state" 
                value={formData.state}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter state"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">City *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-plus"></i>
                </span>
                <input 
                type="text"
                name="city" 
                value={formData.city}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter city"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Address *</label>
            <div className="input-group">
                <span className="input-group-text">
                <i className="bi bi-plus"></i>
                </span>
                <input 
                type="text"
                name="address" 
                value={formData.address}
                onChange={handleChange}
                className="form-control" 
                placeholder="Enter address"
                required 
                />
              </div>
            </div>

            <div className="mb-3">
            <label className="form-label">Photo *</label>
            <input 
                type="file"
                name="photo"
                onChange={handleChange}
                className="form-control" 
            />
            </div>

            <div className="text-center">
            <button 
                type="submit" 
                className="btn btn-primary bg-primary1 mt-2"
                disabled={loading}
            >
                {loading ? 'Updating...' : 'Update Profile'}
            </button>
        </div>
        </form>
        </div>
      </div>
    </div>
        </div>
    )
}

export default UpdateProfile