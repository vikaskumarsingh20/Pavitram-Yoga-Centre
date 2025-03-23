import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/context/AuthContext';
import { toast } from 'react-hot-toast';
import { updateProfile } from '../../../services/apis'; // Adjust the path if needed
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import "./update.css";

function UpdateProfile() {
    const { currentUser, updateUser, loading,setLoading } = useAuth();
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
    
    // Additional state for UI enhancements
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

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

    // Handle drag events for image upload
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };
    
    const handleDragLeave = () => {
        setIsDragging(false);
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileValidation(e.dataTransfer.files[0]);
        }
    };
    
    // Separate file validation logic
    const handleFileValidation = (file) => {
        setErrors({...errors, photo: null});
        
        if (!file) return;
        
        // Validate file size
        if (file.size > 5 * 1024 * 1024) {
            setErrors({...errors, photo: "File size should not exceed 5MB"});
            toast.error("File size should not exceed 5MB");
            return;
        }
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            setErrors({...errors, photo: "Only image files are allowed"});
            toast.error("Only image files are allowed");
            return;
        }
        
        // Update both photo and formData
        setFormData(prev => ({
            ...prev,
            photo: file,
            profileImage: URL.createObjectURL(file)
        }));
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        // Clear any previous errors for this field
        setErrors({...errors, [name]: null});

        if (type === 'file') {
            if (files[0]) {
                handleFileValidation(files[0]);
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    
    // Validate all form fields
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }
        
        // Phone number validation (simple version)
        if (formData.phone.length < 10) {
            newErrors.phone = "Please enter a valid phone number";
            isValid = false;
        }
        
        // Check required fields
        const requiredFields = ['fullName', 'email', 'phone', 'gender', 'country', 'state', 'city', 'address'];
        for (const field of requiredFields) {
            if (!formData[field] || formData[field].trim() === '') {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                isValid = false;
            }
        }

        // Gender validation
        if (!['male', 'female'].includes(formData.gender.toLowerCase())) {
            newErrors.gender = "Please select a valid gender";
            isValid = false;
        }

        // Update errors state
        setErrors(newErrors);
        
        return isValid;
    };

    // Handle confirm modal
    const openConfirmModal = (e) => {
        e.preventDefault();
        
        // Validate form before showing confirmation
        if (!validateForm()) {
            // Show toast for validation errors
            toast.error('Please fill in all required fields correctly');
            return;
        }
        
        setShowConfirmModal(true);
    };
    
    const closeConfirmModal = () => {
        setShowConfirmModal(false);
    };

    const handleSubmit = async () => {
        closeConfirmModal();
        
        try {
            setLoading(true);
            setIsUploading(true);
            setUploadProgress(0);
            
            const formDataToSend = new FormData();

            // Log the data being sent
            console.log('Updating profile with data:', JSON.stringify(formData, null, 2));
            
            // Append all form fields including gender, country, city etc.
            ['fullName', 'phone', 'email', 'gender', 'country', 'state', 'city', 'address'].forEach(field => {
                if (formData[field]) {
                    formDataToSend.append(field, formData[field]);
                    console.log(`Adding field ${field}: ${formData[field]}`);
                }
            });

            // Append photo if selected
            if (formData.photo instanceof File) {
                // Append with original filename
                formDataToSend.append('photo', formData.photo, formData.photo.name);
                console.log(`Adding photo: ${formData.photo.name}, size: ${formData.photo.size}`);
            }
            
            // Simulate progress updates
            const progressInterval = setInterval(() => {
                setUploadProgress(prev => {
                    // Don't go above 90% until we get confirmation of completion
                    if (prev >= 90) {
                        clearInterval(progressInterval);
                        return 90;
                    }
                    return prev + 10;
                });
            }, 300);

            // Make sure we have a user ID
            if (!currentUser?._id) {
                throw new Error('User ID is missing. Please log in again.');
            }

            console.log(`Submitting update for user ID: ${currentUser._id}`);
            const response = await updateProfile(currentUser._id, formDataToSend);
            
            // Update progress to 100% after successful response
            setUploadProgress(100);
            
            if (response.success) {
                console.log('Profile update successful:', response);
                // Update local state with new user data
                updateUser({
                    ...currentUser,
                    ...response.user
                });
                toast.success('Profile updated successfully');
                setTimeout(() => {
                    setIsUploading(false);
                    navigate('/user/account-info');
                }, 500);
            } else {
                // Handle unsuccessful response
                console.error('Update failed with response:', response);
                toast.error(response.message || 'Failed to update profile');
            }
        } catch (error) {
            // Enhanced error logging
            console.error('Update profile error:', error);
            
            // Network error detection and handling
            if (error.name === 'NetworkError' || !navigator.onLine || error.message.includes('network')) {
                toast.error('Network error. Please check your internet connection and try again.');
            } else if (error.response) {
                // Server responded with an error status
                console.error('Server error:', error.response);
                toast.error(`Server error: ${error.response.status} - ${error.response.data?.message || 'Unknown error'}`);
            } else {
                toast.error(error.message || 'Failed to update profile');
            }
        } finally {
            setLoading(false);
            // Reset upload progress if there was an error
            if (uploadProgress < 100) {
                setIsUploading(false);
                setUploadProgress(0);
            }
        }
    };

    return (
        <div className="container-fluid">
            <h2 className="account-title"> Update Profile</h2>
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
                                        checked={formData.gender.toLowerCase() === "male"}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="male" className="form-check-label ms-2 me-3">Male</label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        checked={formData.gender.toLowerCase() === "female"}
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

                            {/* <div className="mb-3">
                                <label className="form-label">Photo *</label>
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div> */}

                            <div className="mb-3">
                                <label className="form-label">Profile Photo</label>
                                
                                {/* Drag and drop area */}
                                <div 
                                    className={`upload-area ${isDragging ? 'drag-active' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <div className="upload-icon">
                                        <i className="bi bi-cloud-arrow-up-fill"></i>
                                    </div>
                                    <p>Drag & drop an image here or click to browse</p>
                                    <p className="small text-muted">Supported formats: JPG, PNG, GIF (Max: 5MB)</p>
                                    
                                    {errors.photo && (
                                        <div className="alert alert-danger mt-2 py-1 small">
                                            {errors.photo}
                                        </div>
                                    )}
                                    
                                    {/* Hidden file input */}
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="d-none"
                                    />
                                </div>

                                {/* Preview area */}
                                {(formData.profileImage || currentUser?.profileImage) && (
                                    <div className="image-preview mt-3 text-center">
                                        <img 
                                            src={formData.profileImage || currentUser.profileImage}
                                            alt="Profile"
                                            className="profile-preview-img"
                                        />
                                        {formData.photo instanceof File && (
                                            <p className="mt-1 text-muted small">
                                                {formData.photo.name} ({Math.round(formData.photo.size / 1024)} KB)
                                            </p>
                                        )}
                                    </div>
                                )}
                                
                                {/* Upload progress bar */}
                                {isUploading && (
                                    <div className="mt-3">
                                        <ProgressBar 
                                            now={uploadProgress} 
                                            label={`${uploadProgress}%`}
                                            variant={uploadProgress === 100 ? "success" : "primary"}
                                            animated={uploadProgress < 100}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <Link to="/user/account-info" className="btn btn-secondary">
                                    <i className="bi bi-arrow-left me-1"></i> Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="btn btn-primary bg-primary1"
                                    disabled={loading}
                                    onClick={openConfirmModal}
                                >
                                    <i className="bi bi-check-circle me-1"></i>
                                    {loading ? 'Updating...' : 'Update Profile'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Confirmation Modal */}
            <Modal show={showConfirmModal} onHide={closeConfirmModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Profile Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to update your profile information?</p>
                    
                    {formData.photo instanceof File && (
                        <div className="alert alert-info">
                            <i className="bi bi-info-circle me-2"></i>
                            Your profile photo will be updated.
                        </div>
                    )}
                    
                    <div className="small mt-3">
                        <strong>Note:</strong> Your updated information will be immediately visible in your profile.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeConfirmModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Updating...
                            </>
                        ) : (
                            'Confirm Update'
                        )}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateProfile