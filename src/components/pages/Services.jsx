import NavBar from "../common/NavBar";
import Footer from "../Home/FooterCopyright";
import img1 from "../../assets/Services/img1.jpg"
import img2 from "../../assets/Services/img2.jpg"
import img3 from "../../assets/Services/img-3.jpg"
import img4 from "../../assets/Services/img4.jpg"
import img5 from "../../assets/Services/img5.jpg"
import img6 from "../../assets/Services/img6.jpg"
import { Link } from "react-router-dom";


function Services() {

    const services = [
        {
          title: 'GROUP YOGA CLASSES',
          trainer: 'Shri VikasAnanda',
          duration: '60 min',
          audience: 'EVERYONE',
          image:img1,
          morningSlots: ['6-7', '7-8', '8-9'],
          eveningSlots: ['5-6', '6-7']
        },
        {
          title: 'THERAPY SESSION',
          trainer: 'Sh Pramod Kumar Sharma',
          duration: '60 min',
          audience: 'EVERYONE',
          image: img2,
          morningSlots: ['9-10', '10-11', '11-12'],
          eveningSlots: ['5-6', '7-8', '8-9']
        },
        {
          title: 'SPIRITUAL COUNSELLING',
          trainer: 'SHRI. GURU JI',
          duration: '90 min',
          audience: 'TO ALL',
          image: img3,
          eveningSlots: ['5-6', '6-7', '7-8']
        },
        {
          title: 'HOME CLASSES',
          trainer: 'Pavitram Team',
          duration: '60 min',
          audience: 'EVERYONE',
          image: img4,
          morningSlots: ['7-8', '9-10', '11-12'],
          eveningSlots: ['5-6', '7-8', '8-9']
        },
        {
          title: 'MEDITATION SESSIONS',
          trainer: 'SHRI. GURU JI',
          duration: '60 min',
          audience: 'TO ALL',
          image: img5,
          morningSlots: ['7-8'],
          eveningSlots: ['7-8']
        },
        {
          title: 'DIET',
          trainer: 'Pavitram Team',
          duration: '50 min',
          audience: 'TO ALL',
          image:img6,
          morningSlots: [],
          eveningSlots: []
        }
      ];
  return (
<>
      <NavBar />
      {/* Header Section */}
      <div className="container-fluid laptop-margin">
        <div className="d-flex flex-column align-items-center justify-content-center py-5  text-white" style={{ backgroundColor: 'rgb(42, 23, 111)' }}>
          <h1 className="text-center">OUR SERVICES</h1>
          <div>
            <Link to="/" className="btn btn-link text-white text-decoration-none">Home</Link>
            <span> • </span>
            <Link to="/home/cart" className="btn btn-link text-white text-decoration-none"> Services</Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card   p-3 border-0">
                <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{minHeight: '250px', maxHeight: '250px'}} />
                <h5 className="mt-3 text-center fw-bold">{service.title}</h5>
                <p className="text-center"><small> <i className="fa-solid fa-user-group text-danger me-1"></i> By {service.trainer} | <i className="fa-solid fa-calendar-days text-danger me-1"></i> {service.duration} | 🎯 {service.audience}</small></p>
                <p className="text-center"><small>Available Service: 🏠 Online & At Center</small></p>
                {service.morningSlots && service.morningSlots.length > 0 && (
                  <p><strong>Morning :</strong> {service.morningSlots.map(slot => <button className="btn btn-danger btn-sm m-1" key={slot}>{slot}</button>)}</p>
                )}
                {service.eveningSlots && service.eveningSlots.length > 0 && (
                  <p><strong>Evening :</strong> {service.eveningSlots.map(slot => <button className="btn btn-danger btn-sm m-1" key={slot}>{slot}</button>)}</p>
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

export default Services