/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../Home/FooterCopyright'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
    <NavBar />
    <div className='container-fluid laptop-margin '>
    <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" > Registration</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
        <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10 border p-4 shadow-sm">
          <h3 className="fw-bold">Registration</h3>
          <p>If you have an account with us, please log in.</p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name<span className='text-danger' required>*</span></label>
              <input type="text" className="form-control"  />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone<span className='text-danger' required>*</span></label>
              <input type="text" className="form-control"   />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email<span className='text-danger' required>*</span></label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Password<span className='text-danger' required>*</span></label>
              <input type="password" className="form-control"   />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Address <span className='text-danger' required>*</span></label>
              <input type="text" className="form-control"  />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Password Confirm<span className='text-danger' required>*</span></label>
              <input type="password" className="form-control"   />
            </div>
          </div>
          <button className="btn btn-outline-success">Submit</button>
        </div>
      </div>
    </div>

    </div>
    <Footer />
</>
  )
}

export default Registration