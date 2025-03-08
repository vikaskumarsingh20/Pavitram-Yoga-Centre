import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Forget() {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        hasMinLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    })
    const { resetPassword } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        if (name === 'newPassword') {
            const hasMinLength = value.length >= 8;
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

            const score = [hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

            setPasswordStrength({
                score,
                hasMinLength,
                hasUpperCase,
                hasLowerCase,
                hasNumber,
                hasSpecialChar
            });
        }
    }

    const getStrengthColor = (score) => {
        if (score <= 2) return 'danger';
        if (score <= 4) return 'warning';
        return 'success';
    }

    const getStrengthLabel = (score) => {
        if (score <= 1) return 'Very Weak';
        if (score <= 2) return 'Weak';
        if (score <= 3) return 'Moderate';
        if (score <= 4) return 'Strong';
        return 'Very Strong';
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error('New password and confirm password do not match')
            return
        }

        if (passwordStrength.score < 3) {
            toast.error('Password is too weak. Please choose a stronger password.')
            return
        }

        if (!passwordStrength.hasMinLength) {
            toast.error('Password must be at least 8 characters long')
            return
        }

        try {
            await resetPassword(formData.oldPassword, formData.newPassword)
            // toast.success('Password reset successfully!')
            setFormData({
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            })
            setPasswordStrength({
                score: 0,
                hasMinLength: false,
                hasUpperCase: false,
                hasLowerCase: false,
                hasNumber: false,
                hasSpecialChar: false
            })
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                toast.error('Your current password is incorrect')
            } else if (error.code === 'auth/too-many-requests') {
                toast.error('Too many failed attempts. Please try again later')
            } else if (error.code === 'auth/requires-recent-login') {
                toast.error('This action requires you to re-login. Please log out and log back in')
            } else {
                toast.error(error.message || 'Failed to reset password')
            }
        }
    }

    return (
        <div className="container-fluid">
            {/* <Toaster position="top-right" /> */}
            <h2 className="account-title">Forget Password</h2>

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
                                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
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
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {formData.newPassword && (
                            <div className="mt-2">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <small>Password Strength: {getStrengthLabel(passwordStrength.score)}</small>
                                    <small className={`text-${getStrengthColor(passwordStrength.score)}`}>
                                        {passwordStrength.score}/5
                                    </small>
                                </div>
                                <div className="progress" style={{ height: '5px' }}>
                                    <div
                                        className={`progress-bar bg-${getStrengthColor(passwordStrength.score)}`}
                                        role="progressbar"
                                        style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                                        aria-valuenow={passwordStrength.score * 20}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>

                                <div className="mt-2 password-requirements">
                                    <small className={passwordStrength.hasMinLength ? "text-success" : "text-muted"}>
                                        <i className={`bi ${passwordStrength.hasMinLength ? "bi-check-circle-fill" : "bi-circle"} me-1`}></i>
                                        At least 8 characters
                                    </small><br />
                                    <small className={passwordStrength.hasUpperCase ? "text-success" : "text-muted"}>
                                        <i className={`bi ${passwordStrength.hasUpperCase ? "bi-check-circle-fill" : "bi-circle"} me-1`}></i>
                                        Contains uppercase letter
                                    </small><br />
                                    <small className={passwordStrength.hasLowerCase ? "text-success" : "text-muted"}>
                                        <i className={`bi ${passwordStrength.hasLowerCase ? "bi-check-circle-fill" : "bi-circle"} me-1`}></i>
                                        Contains lowercase letter
                                    </small><br />
                                    <small className={passwordStrength.hasNumber ? "text-success" : "text-muted"}>
                                        <i className={`bi ${passwordStrength.hasNumber ? "bi-check-circle-fill" : "bi-circle"} me-1`}></i>
                                        Contains number
                                    </small><br />
                                    <small className={passwordStrength.hasSpecialChar ? "text-success" : "text-muted"}>
                                        <i className={`bi ${passwordStrength.hasSpecialChar ? "bi-check-circle-fill" : "bi-circle"} me-1`}></i>
                                        Contains special character
                                    </small>
                                </div>
                            </div>
                        )}
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
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword && (
                            <div className="text-danger mt-1">Passwords do not match</div>
                        )}
                    </div>

                    <div className="d-flex justify-content-center mt-3 mb-2">
                        <button
                            type="submit"
                            className="btn btn-primary bg-primary1"
                            disabled={!formData.oldPassword || !formData.newPassword || !formData.confirmPassword ||
                                formData.newPassword !== formData.confirmPassword || passwordStrength.score < 3}
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
