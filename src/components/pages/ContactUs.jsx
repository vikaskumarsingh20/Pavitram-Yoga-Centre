// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../common/NavBar'
import Footer from '../Home/FooterCopyright'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <NavBar />
            <div className='container-fluid laptop-margin mb-5 '>
            <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >Contact Us</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-map-marker-alt text-danger"></i> Our Office Location</h5>
                                <p>Pavitram Dhyan Yoga Kendra <br /> 3/48, Sector-5, Rajendra Nagar <br /> Sahibabad, Ghaziabad U.P India <br /> 201005</p>
                            </div>
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-phone text-danger"></i> Contact Number</h5>
                                <p>9999592971, 9717189911</p>
                            </div>
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-envelope text-danger"></i> Email Address</h5>
                                <p>pavitramav@gmail.com <br /> pavitramyoga011@gmail.com</p>
                            </div>
                            <div className="p-3 border rounded">
                                <h5><i className="fab fa-skype text-danger"></i> Make a Video Call</h5>
                                <p>MascotSkype</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h4>Interested in discussing?</h4>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control"   required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email  <span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control"  required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject  <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control"   required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-success me-2">Send your message</button>
                                <button type="reset" className="btn btn-outline-danger">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs