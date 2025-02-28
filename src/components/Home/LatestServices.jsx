/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import titlelogo from "../../assets/images/title-icon.png"
import { Link } from 'react-router-dom'
import { services } from '../data/services'

function LatestServices() {

    const ServiceCard = ({ service, index }) => {
        return (
            <div className="col-md-4 mb-4">
                <div className="card  border-0 p-3">
                    <h5 className="text-center mt-1 mb-2 fs-5">{service.title}</h5>
                    <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{ minHeight: '250px', maxHeight: '250px' }} />
                    <p className="text-center">
                        <small> <i className="fa-solid fa-user-group text-danger me-1"></i>By {service.trainer} | <i className="fa-solid fa-calendar-days text-danger"></i> {service.duration} | 🎯 {service.audience}</small>
                    </p>
                    <p className="text-center lh-1">
                        <small>Available Service: <i className="fa-solid fa-home text-danger me-1"></i> {service.availableService}</small>
                    </p>
                    {service.morningSlots && service.morningSlots.length > 0 && (
                        <p><strong>Morning : </strong> {service.morningSlots.map(slot => <Link to={`/home/service_detail/${index}`} state={{ service, timeSlot: slot, period: "Morning" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                    )}
                    {service.eveningSlots && service.eveningSlots.length > 0 && (
                        <p><strong>Evening :</strong> {service.eveningSlots.map(slot => <Link to={`/home/service_detail/${index}`} state={{ service, timeSlot: slot, period: "Evening" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                    )}
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="container-fluid mb-3 ">
                <p className='border border-3 border-dark bg-light'></p>
                          <h2 className='text-center'>Latest <span className='text-danger'>Services</span></h2>
                          <img src={titlelogo} className='mx-auto d-block mb-3' alt="Title Logo" />
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
                {/* More Button */}
                <div className="text-center">
                    <Link to="/home/service" className="btn btn-danger">More</Link>
                </div>
            </div>
        </>
    )
}

export default LatestServices