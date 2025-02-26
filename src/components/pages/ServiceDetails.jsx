import  { useState } from 'react';
import NavBar from '../common/NavBar';
import Footer from '../Home/FooterCopyright';
import cartLogo from "../../assets/Services/course1.png";
import { Link } from 'react-router-dom';

function ServiceDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedType, setSelectedType] = useState(null);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleSessionTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid laptop-margin">
        {/* Banner Section */}
        <div className="bg-purple text-white text-center py-5 bg-image">
          <h2 className="fw-bold">VIEW DETAILS</h2>
          <p>
            <a href="/" className="text-white text-decoration-none">Home</a> ○ View Details
          </p>
        </div>

        {/* Therapy Session Section */}
        <div className="container py-5">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-5 text-center">
              <img src={cartLogo} className="img-fluid rounded" alt="Therapy Session" />
            </div>

            {/* Details Section */}
            <div className="col-md-7">
              <h3 className="fw-bold">THERAPY SESSION</h3>
              <p><strong>Duration:</strong> 60 min</p>
              <p><strong>Morning:</strong> (9-10)</p>

              {/* Session Selection */}
              <div className="d-flex flex-wrap gap-4">
                <div className="flex-grow-1">
                  <input type="radio" id="online" name="sessionType"
                   checked={selectedType === "online"}
                   onChange={() => handleSessionTypeChange("online")} />
                  <label htmlFor="online" className="ms-2 fw-bold">ONLINE</label>
                  <div className="session-box border p-3 mt-2">
                    {[['1 YEAR', 7000, 4500], ['6 MONTHS', 4200, 3000], ['3 MONTHS', 2100, 1600], ['1 MONTH', 700, 600]].map(([label, oldPrice, newPrice], index) => (
                      <label key={index} className="d-flex justify-content-between align-items-center mb-2">
                        <input type="radio" name="session" disabled={selectedType !== "online"} className="me-2" />
                        <span>{label}</span>
                        <del className="text-muted">₹{oldPrice}.00</del>
                        <span className="text-danger">₹{newPrice}.00</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input type="radio" id="center" name="sessionType"
                     checked={selectedType === "center"}
                     onChange={() => handleSessionTypeChange("center")} />
                  <label htmlFor="center" className="ms-2 fw-bold">AT CENTRE</label>
                  <div className="session-box border p-3 mt-2">
                    {[['1 YEAR', 7000, 4500], ['6 MONTHS', 4200, 3000], ['3 MONTHS', 2100, 1600], ['1 MONTH', 700, 600]].map(([label, oldPrice, newPrice], index) => (
                      <label key={index} className="d-flex justify-content-between align-items-center mb-2">
                        <input type="radio" name="session" disabled={selectedType !== "center"} className="me-2" />
                        <span>{label}</span>
                        <del className="text-muted">₹{oldPrice}.00</del>
                        <span className="text-danger">₹{newPrice}.00</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mt-3">
                <p><strong>Getting more details? Set time slot, please call us.</strong></p>

                <div className="d-flex align-items-center">
                  <p className="fw-bold mb-0 me-3">Qty:</p>
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange("decrease")}>-</button>
                  <span className="px-3">{quantity}</span>
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange("increase")}>+</button>
                </div>

                <div className="d-flex justify-content-start align-items-center">
                  <Link to="/home/cart" className='mt-3 mb-3 btn btn-primary'>Add to Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServiceDetails;
