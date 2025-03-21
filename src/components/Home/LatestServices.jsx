import { Link } from "react-router-dom";
import { services } from "../data/services";
import titlelogo from "../../assets/images/title-icon.png"

function Services() {
    return (
        <section className="services-section mt-0 mb-4">
            <div className="border border-3 border-dark bg-light mb-4"></div>
            <div className="text-center mb-4">
                <h2>Latest <span className="text-danger">Services</span></h2>
                <img src={titlelogo} className="mx-auto d-block" alt="Title Logo" />
            </div>

            <div className="container">
                <div className="row g-3"> {/* Add gutter spacing */}
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4"> {/* Responsive columns */}
                            <div className="service-card h-100 shadow-sm rounded overflow-hidden">
                                <div className="position-relative">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="img-fluid w-100 object-fit-cover"
                                        style={{ height: '250px' }}
                                    />
                                </div>
                                <div className="p-3">
                                    <h5 className="fw-bold text-center mb-3">{service.title}</h5>
                                    <div className="service-info small mb-3">
                                        <div className="d-flex justify-content-center flex-wrap gap-3">
                                            <span>
                                                <i className="fa-solid fa-user-group text-danger me-1"></i>
                                                {service.trainer}
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-calendar-days text-danger me-1"></i>
                                                {service.duration}
                                            </span>
                                            <span>🎯 {service.audience}</span>
                                        </div>
                                    </div>
                                    <p className="text-center small mb-3">
                                        <span className="badge bg-light text-dark">
                                            🏠 Online & At Center
                                        </span>
                                    </p>
                                    
                                    {service.morningSlots && service.morningSlots.length > 0 && (
                                        <div className="time-slots mb-2">
                                            <strong className="d-block mb-2">Morning:</strong>
                                            <div className="d-flex flex-wrap gap-2">
                                                {service.morningSlots.map(slot => (
                                                    <Link 
                                                        to={`/home/service_detail/${index}`}
                                                        state={{ service, timeSlot: slot, period: "Morning" }}
                                                        className="btn btn-danger btn-sm"
                                                        key={slot}
                                                    >
                                                        {slot}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {service.eveningSlots && service.eveningSlots.length > 0 && (
                                        <div className="time-slots">
                                            <strong className="d-block mb-2">Evening:</strong>
                                            <div className="d-flex flex-wrap gap-2">
                                                {service.eveningSlots.map(slot => (
                                                    <Link 
                                                        to={`/home/service_detail/${index}`}
                                                        state={{ service, timeSlot: slot, period: "Evening" }}
                                                        className="btn btn-danger btn-sm"
                                                        key={slot}
                                                    >
                                                        {slot}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-5">
                    <Link to="/home/service" className="btn btn-danger px-4">
                        View More Services
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Services;