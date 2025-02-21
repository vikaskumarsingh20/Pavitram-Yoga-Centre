/* eslint-disable no-unused-vars */
import React from 'react'
// import { FaRegCalendarAlt } from "react-icons/fa";
import img1 from "../../assets/Services/img1.jpg"
import img2 from "../../assets/Services/img2.jpg"
import img3 from "../../assets/Services/img-3.jpg"
import img4 from "../../assets/Services/img4.jpg"
import img5 from "../../assets/Services/img5.jpg"
import img6 from "../../assets/Services/img6.jpg"
import titlelogo from "../../assets/images/title-icon.png"
import Button from 'react-bootstrap/Button';




function LatestServices() {
    return (
        <div className='bg-light'>
            <p className='border border-3 border-dark'></p>
            <h2 className='text-center'>Latest <span className='text-danger'>Services</span> </h2>
            <img src={titlelogo} className='mx-auto d-block mb-3' alt="Title Logo" />

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>GROUP YOGA CLASSES</h4>
                            <img src={img1} className="card-img-top" alt="..." style={{ height: "278px" }} />
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> By Shri Vikeshananda</p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>THERAPY SESSION</h4>
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> By Sh.Pramod ku. sharma</p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>SPIRITUAL COUNSELLING</h4>
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i>By SHRI. GURU JI </p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>SPIRITUAL COUNSELLING</h4>
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i>By SHRI. GURU JI </p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>SPIRITUAL COUNSELLING</h4>
                            <img src={img5} className="card-img-top" alt="..." style={{ height: "278px" }} />
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i>By SHRI. GURU JI </p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>SPIRITUAL COUNSELLING</h4>
                            <img src={img6} className="card-img-top" alt="..." style={{ height: "281px" }}/>
                            <div className="card-body d-flex flex-wrap justify-content-between align-items-start">
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i>By SHRI. GURU JI </p>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i> 60 min</p>
                                <p className="card-text"><i className="fa-solid fa-user-group text-danger"></i> Everyone</p>
                                <p className="card-text">Available Service : <i className="fa fa-fire text-danger"></i>  Online & At Center</p>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className='mb-1 d-flex flex-wrap justify-content-between'>
                                    <div className="d-none d-md-block">Morning:</div>
                                    <div className="d-md-none text-center">Morning</div>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(8-9)</Button>
                                </div>

                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="d-none d-md-block">Evening:</div>
                                    <div className="d-md-none text-center">Evening</div>
                                    <Button variant="danger" className="me-2 mb-1">(5-6)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(6-7)</Button>
                                    <Button variant="danger" className="me-2 mb-1">(7-8)</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                    <Button variant="danger" className="me-2 mb-3">More</Button>
                    </div>
            </div>
        </div>
    )
}

export default LatestServices