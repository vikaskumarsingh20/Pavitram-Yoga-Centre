/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../Home/FooterCopyright'
import NavBar from './NavBar'

function Registration() {
  return (
    <>
    <NavBar />
    <div className='container-fluid laptop-margin '>
        <div className="d-flex flex-column align-items-center justify-content-center py-5 px-5 bg-image">
            <h1 className="text-center text-white">Registration</h1>

        </div>
        <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10 border p-4 shadow-sm">
          <h3 className="fw-bold">Registration</h3>
          <p>If you have an account with us, please log in.</p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name<span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone<span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email<span className='text-danger'>*</span></label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Password<span className='text-danger'>*</span></label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Address <span className='text-danger'>*</span></label>
              <input type="text" className="form-control" placeholder="Address" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Password Confirm<span className='text-danger'>*</span></label>
              <input type="password" className="form-control" placeholder="Password Confirm" />
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