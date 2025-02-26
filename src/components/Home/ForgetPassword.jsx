// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../common/NavBar'
import Footer from './FooterCopyright'

function ForgetPassword() {
  return (
    <>
     <NavBar />
      
      <div className="container-fluid laptop-margin">
        {/* Background Section */}
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white">FORGET PASSWORD</h1>
          <div>
            <Link to="/" className="btn btn-link text-white text-decoration-none">Home</Link>
            <span> • </span>
            <Link to="/forget-password" className="btn btn-link text-white text-decoration-none">Forget Password</Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="card p-4 shadow" style={{ width: '400px' }}>
            <h4 className="mb-3">Forget Password</h4>
            <input 
              type="email" 
              className="form-control mb-3" 
              placeholder="Your registered Email" 
            />
            <button className="btn btn-outline-primary ">Reset Password</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ForgetPassword