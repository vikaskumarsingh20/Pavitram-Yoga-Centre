/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import titlelogo from "../../assets/images/title-icon.png";
import { Link } from 'react-router-dom';

function LatestServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`);
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                setServices(data.blogs || []); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error fetching services:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

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

    if (loading) {
        return <div className="text-center">Loading services...</div>;
    }

    if (error) {
        return <div className="text-center text-danger">Error: {error}</div>;
    }

    return (
        <>
            <div className="container-fluid mb-3">
                <p className='border border-3 border-dark bg-light'></p>
                <h2 className='text-center'>Latest <span className='text-danger'>Services</span></h2>
                <img src={titlelogo} className='mx-auto d-block mb-3' alt="Title Logo" />
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard key={service._id || index} service={service} index={index} />
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/home/service" className="btn btn-danger">More</Link>
                </div>
            </div>
        </>
    );
}

export default LatestServices;