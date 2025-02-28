// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../common/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../Home/FooterCopyright'
import { homeclass } from "../data/homeclass";

function HomeClasses() {
  return (
    <>
      <NavBar />
      <div className="container-fluid laptop-margin">
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white z-2" > Home Classes</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
            Home
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {homeclass.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card   p-3 border-0">
              <h5 className="mt-3 text-center  fs-5">{service.title}</h5>
                <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{ minHeight: '250px', maxHeight: '250px' }} />
                <p className="text-center"><small> <i className="fa-solid fa-user-group text-danger me-1"></i> By {service.trainer} | <i className="fa-solid fa-calendar-days text-danger me-1"></i> {service.duration} | 🎯 {service.audience}</small></p>
                <p className="text-center"><small>Available Service: 🏠 {service.availableService}</small></p>
                {service.morningSlots && service.morningSlots.length > 0 && (
                  <p><strong>Morning : </strong> {service.morningSlots.map(slot => <Link to={`/home/homeclass_details/${index}`} state={{ service, timeSlot: slot, period: "Morning" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                )}
                {service.eveningSlots && service.eveningSlots.length > 0 && (
                  <p><strong>Evening :</strong> {service.eveningSlots.map(slot => <Link to={`/home/homeclass_details/${index}`} state={{ service, timeSlot: slot, period: "Evening" }} className="btn btn-danger btn-sm m-1" key={slot}>{slot}</Link>)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HomeClasses