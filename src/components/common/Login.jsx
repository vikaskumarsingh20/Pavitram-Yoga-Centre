// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './NavBar'
import Footer from '../Home/FooterCopyright'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <NavBar />
            <div className='container-fluid laptop-margin '>
                <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
                    <h1 className="text-center text-white">Login</h1>
                    <div style={{zIndex: 1}}>
                        <Link to="/" className="text-white text-decoration-none">Home</Link>
                        <span> • </span>
                        <Link to="/home/cart" className="text-white text-decoration-none">Add to Cart</Link>
                    </div>

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
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password*</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <Link to="/Home/forget_password"> <p className="text-muted text-decoration-none">Forgot Password?</p></Link>
                           
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Login