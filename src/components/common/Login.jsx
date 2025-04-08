/* eslint-disable no-unused-vars */
import { useState } from 'react';
import NavBar from './NavBar';
import Footer from '../Home/FooterCopyright';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getEmailError, getPasswordError } from '../../utils/regexPatterns';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({
            ...errors,
            [name]: name === 'email' ? getEmailError(value) : name === 'password' ? getPasswordError(value) : ''
        });
    };

    const validateForm = () => {
        const emailError = getEmailError(formData.email);
        const passwordError = getPasswordError(formData.password);
        setErrors({ email: emailError, password: passwordError });
        return !emailError && !passwordError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("Please fix the form errors");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok && data.token) {
                setFormData({ email: '', password: '' });
                login(data.user, data.token);
                navigate("/");
                toast.success("Login successful!");
            } else {
                toast.error(data.error || "Invalid user credentials");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again later.");
        }
    };

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Toaster />
            <NavBar />
            <div className='container-fluid laptop-margin'>
                <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
                    <h1 className="text-center text-white z-2">Login</h1>
                    <Link to="/" className="text-white mt-3 px-4 py-2 home-link">Home</Link>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 border p-4 shadow-sm">
                            <h3 className="fw-bold">New Account</h3>
                            <p>By creating an account with Pavitram, you will be able to move through the checkout process faster</p>
                            <Link to="/home/registration" className="btn btn-primary">Register</Link>


                            <div className="admin-login-section text-center p-4 mt-4 border-top">
                                <div className="admin-icon mb-3">
                                    <i className="fas fa-user-shield fa-2x text-secondary"></i>
                                </div>
                                <h3 className="fw-bold mb-3">Admin Login</h3>
                                <p className="text-muted mb-3">Access administrative dashboard</p>
                                <Link
                                    to="/admin/login"
                                    className="btn btn-admin-login position-relative overflow-hidden"
                                >
                                    <span className="btn-text">
                                        <i className="fas fa-lock me-2"></i>
                                        Login as Admin
                                    </span>
                                </Link>
                            </div>

                        </div>



                        <div className="col-md-5 border p-4 shadow-sm">
                            <h3 className="fw-bold">Registered Account</h3>
                            <p>If you have an account with us, please log in.</p>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label className="form-label">Email Address*</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>

                            {/* Password Field */}
                            <div className="mb-3">
                                <label className="form-label">Password*</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        className="btn btn-outline-secondary border-1"
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-danger">{errors.password}</p>}
                            </div>

                            <div className='d-flex flex-column'>
                                <Link to="/Home/forget_password" className="text-muted text-decoration-none mb-3"> Forgot Password? </Link>

                                <div className='d-flex justify-content-start align-items-center'>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                        disabled={!!errors.email || !!errors.password}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
