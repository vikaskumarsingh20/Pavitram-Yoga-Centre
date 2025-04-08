import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import './login.css';
import { fetchDashboardData } from '../../services/adminService';

function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Get credentials from environment variables
        const defaultEmail = import.meta.env.VITE_ADMIN_EMAIL;
        const defaultPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        try {
            if (formData.email === defaultEmail && formData.password === defaultPassword) {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Store admin token
                const token = 'dummy-admin-token'; // Replace with real JWT token
                localStorage.setItem('adminToken', token);

                // Fetch dashboard data
                const dashboardData = await fetchDashboardData();
                localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
                
                toast.success('Login successful!');
                navigate('/admin/dashboard');
            } else {
                toast.error('Invalid credentials');
            }
        } catch (error) {
            toast.error('Login failed');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <div className="admin-login-header">
                    <FaUserShield className="admin-icon" />
                    <h2>Admin Login</h2>
                    <p>Welcome back! Please login to your account.</p>
                </div>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-icon">
                                <FaUserShield />
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Admin Email"
                                required
                                className="form-input"
                            />
                            <span className="input-line"></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-icon">
                                <FaLock />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                                className="form-input"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <span className="input-line"></span>
                        </div>
                    </div>

                    <div className="form-options">
                        <Link to="/admin/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button 
                        type="submit" 
                        className={`login-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;