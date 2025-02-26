/* eslint-disable react/prop-types */
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
import { Link } from 'react-router-dom'




function LatestServices() {
    const services = [
        {
            title: 'GROUP YOGA CLASSES',
            trainer: 'Shri VikasAnanda',
            duration: '60 min',
            audience: 'EVERYONE',
            image: img1,
            availableService: 'Online & At Center',
            morningSlots: ['6-7', '7-8', '8-9'],
            eveningSlots: ['5-6', '6-7']
        },
        {
            title: 'THERAPY SESSION',
            trainer: 'Sh Pramod Sharma',
            duration: '60 min',
            audience: 'EVERYONE',
            image: img2,
            availableService: 'Online & At Center',
            morningSlots: ['9-10', '10-11', '11-12'],
            eveningSlots: ['5-6', '7-8', '8-9']
        },
        {
            title: 'SPIRITUAL COUNSELLING',
            trainer: 'SHRI. GURU JI',
            duration: '90 min',
            audience: 'TO ALL',
            image: img3,
            availableService: 'Online & At Center',
            eveningSlots: ['5-6', '6-7', '7-8']
        },
        {
            title: 'HOME CLASSES',
            trainer: 'Pavitram Team',
            duration: '60 min',
            audience: 'EVERYONE',
            image: img4,
            availableService: 'Online & At Center',
            morningSlots: ['7-8', '9-10', '11-12'],
            eveningSlots: ['5-6', '7-8', '8-9']
        },
        {
            title: 'MEDITATION SESSIONS',
            trainer: 'SHRI. GURU JI',
            duration: '60 min',
            audience: 'TO ALL',
            image: img5,
            availableService: 'Online & At Center',
            morningSlots: ['7-8'],
            eveningSlots: ['7-8']
        },
        {
            title: 'DIET',
            trainer: 'Pavitram Team',
            duration: '50 min',
            audience: 'TO ALL',
            image: img6,
            availableService: 'Offline Only'
        }
    ];

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
                <div className="text-center mt-3">
                    <button className="btn btn-danger">More</button>
                </div>
            </div>
        </>
    )
}

export default LatestServices