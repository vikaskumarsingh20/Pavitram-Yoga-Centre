import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'

function Forget() {
const [showOldPassword, setShowOldPassword] = useState(false)
const [showNewPassword, setShowNewPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)
const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})
const { resetPassword } = useAuth()

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if passwords match
    if (formData.newPassword !== formData.confirmPassword) {
    toast.error('New password and confirm password do not match')
    return
    }
    
    try {
    await resetPassword(formData.oldPassword, formData.newPassword)
    toast.success('Password reset successfully!')
    setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    } catch (error) {
    toast.error(error.message || 'Failed to reset password')
    }
}
return (
    <div className="container-fluid">
    <Toaster position="top-right" />
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

        <form className='p-3' onSubmit={handleSubmit}>
        <div className="mb-3 mt-2 position-relative">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>Previous Password</label>
            <div className="input-group">
            <input 
                type={showOldPassword ? "text" : "password"} 
                className="form-control" 
                placeholder="Enter previous password" 
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                required 
            />
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowOldPassword(!showOldPassword)}
            >
                <i className={`bi ${showOldPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
            </button>
            </div>
        </div>

        <div className="mb-3 mt-2 position-relative">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>New Password</label>
            <div className="input-group">
            <input 
                type={showNewPassword ? "text" : "password"} 
                className="form-control" 
                placeholder="Enter new password" 
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required 
            />
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowNewPassword(!showNewPassword)}
            >
                <i className={`bi ${showNewPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
            </button>
            </div>
        </div>

        <div className="mb-3 mt-2 position-relative">
            <label className="form-label"><i className="bi bi-lock-fill me-2"></i>Confirm Password</label>
            <div className="input-group">
            <input 
                type={showConfirmPassword ? "text" : "password"} 
                className="form-control" 
                placeholder="Confirm new password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
            />
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
                <i className={`bi ${showConfirmPassword ? "bi-eye-slash-fill" : "bi-eye-fill"}`}></i>
            </button>
            </div>
            {formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword && (
            <div className="text-danger mt-1">Passwords do not match</div>
            )}
        </div>

        <div className="d-flex justify-content-center">
            <button 
            type="submit" 
            className="btn btn-primary bg-primary1 mt-3 mb-2 text-center"
            disabled={!formData.oldPassword || !formData.newPassword || !formData.confirmPassword || formData.newPassword !== formData.confirmPassword}
            >
            Reset Password <i className="bi bi-arrow-right-circle-fill ms-2"></i> 
            </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Forget