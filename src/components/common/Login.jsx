// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from '../Home/FooterCopyright'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);


    const { login, error } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Login credentials:', formData);
        const success = await login(formData.email, formData.password);
        if (success) {
            toast.success("Registration successful!", { duration: 5000 });
          }
          if (success) {
            setTimeout(() => navigate('/'), 1000);
        }
    };

    const togglePasswordVisiblity = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
      };
    return (
        <>
        <Toaster />
            <NavBar />
            <div className='container-fluid laptop-margin '>
                <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
                    <h1 className="text-center text-white z-2" > Login</h1>
                    <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                        Home
                    </Link>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 border p-4 shadow-sm">
                            <h3 className="fw-bold">New Account</h3>
                            <p>By creating an account with Pavitram, you will be able to move through the checkout process faster</p>
                            <Link to="/home/registration" className="btn btn-primary">Register</Link>
                        </div>

                        <div className="col-md-5 border p-4 shadow-sm">
                            <h3 className="fw-bold">Registered Account</h3>
                            <p>If you have an account with us, please log in.</p>
                            <div className="mb-3">
                                <label className="form-label">Email Address*</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
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
                                        onClick={togglePasswordVisiblity}
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <Link to="/Home/forget_password" className="text-muted text-decoration-none mb-3"> Forgot Password? </Link>

                                <div className='d-flex justify-content-start align-items-center'>
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}
                                        disabled={
                                            !(

                                                formData.email &&
                                                formData.password &&
                                                formData.email.trim() !== '' &&
                                                formData.password.trim() !== ''

                                            )
                                        }
                                    >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Login