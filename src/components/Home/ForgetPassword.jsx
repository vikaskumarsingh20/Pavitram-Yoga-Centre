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
      <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >   Forget Password</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
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
            <div className='d-flex align-items-center justify-content-center'>
            <button className="btn btn-outline-primary mt-3">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ForgetPassword