import { Link } from "react-router-dom";
import { services } from "../data/services";
import titlelogo from "../../assets/images/title-icon.png"


function Services() {

    return (
        <>
          <p className='border border-3 border-dark bg-light'></p>
          <h2 className='text-center'>Latest <span className='text-danger'> Services</span></h2>
          <img src={titlelogo} className='mx-auto d-block' alt="Title Logo" />
            <div className="container">
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-4">
                            <div className="  p-1 border-0">
                                <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{ minHeight: '250px', maxHeight: '250px' }} />
                                <h5 className="mt-3 text-center fw-bold">{service.title}</h5>
                                <p className="text-center"><small> <i className="fa-solid fa-user-group text-danger me-1"></i> By {service.trainer} | <i className="fa-solid fa-calendar-days text-danger me-1"></i> {service.duration} | 🎯 {service.audience}</small></p>
                                <p className="text-center"><small>Available Service: 🏠 Online & At Center</small></p>
                                {service.morningSlots && service.morningSlots.length > 0 && (
                                    <p><strong>Morning : </strong> {service.morningSlots.map(slot => <Link to={`/home/service_detail/${index}`} state={{ service, timeSlot: slot, period: "Morning" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                                )}
                                {service.eveningSlots && service.eveningSlots.length > 0 && (
                                    <p><strong>Evening :</strong> {service.eveningSlots.map(slot => <Link to={`/home/service_detail/${index}`} state={{ service, timeSlot: slot, period: "Evening" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link to="/home/service" className="btn btn-danger mb-2">More</Link>
                </div>
            </div>
        </>
    )
}

export default Services