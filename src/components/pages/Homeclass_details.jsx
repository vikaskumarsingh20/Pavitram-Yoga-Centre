import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../common/NavBar';
import Footer from '../Home/FooterCopyright';
import cartLogo from "../../assets/Services/course1.png";
import { Link, useParams, useLocation } from 'react-router-dom';

function HomeclassDetails() {
const { addToCart } = useCart();
const [quantity, setQuantity] = useState(1);
const [selectedType, setSelectedType] = useState(null);
const [selectedPeriod, setSelectedPeriod] = useState(null);
const [selectedPrice, setSelectedPrice] = useState(0);
const { classId } = useParams();
const location = useLocation();
// Extract service, timeSlot, and period directly from location.state
const service = location.state?.service || {};
const timeSlot = location.state?.timeSlot || "";
// const period = location.state?.period || "";

// Set default data if state is not available
const serviceName = service.title || "THERAPY SESSION";
const serviceDuration = service.duration || "60 min";
const serviceTime = timeSlot ? `(${timeSlot})` : "(9-10)";
const serviceImage = service.image || cartLogo;
const serviceTrainer = service.trainer || "Not specified";

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleSessionTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
    <Toaster />
    <NavBar />
      <div className="container-fluid laptop-margin">
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >  {serviceName}</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-5 text-center">
            <img src={serviceImage} className="img-fluid rounded" alt={serviceName} />
            </div>

            <div className="col-md-7">
            <h3 className="fw-bold">{serviceName}</h3>
            <p><strong>Duration:</strong> {serviceDuration}</p>
            <p><strong>Time:</strong> {serviceTime}</p>

              <div className="d-flex flex-wrap gap-4">
                 

                <div className="flex-grow-1">
                  <input type="radio" id="center" name="sessionType"
                     checked={selectedType === "center"}
                     onChange={() => handleSessionTypeChange("center")} />
                  <label htmlFor="center" className="ms-2 fw-bold">AT HOME</label>
                  <div className="session-box border p-3 mt-2">
                    {[['3 MONTHS', 30000, 25000], ['1 MONTH', 10000, 9000]].map(([label, oldPrice, newPrice], index) => (
                    <label key={index} className="d-flex justify-content-between align-items-center mb-2">
                        <input 
                        type="radio" 
                        name="session" 
                        disabled={selectedType !== "center"} 
                        className="me-2"
                        onChange={() => {
                            setSelectedPeriod(label);
                            setSelectedPrice(newPrice);
                        }}
                        checked={selectedPeriod === label && selectedType === "center"} 
                        />
                        <span>{label}</span>
                        <del className="text-muted">₹{oldPrice}.00</del>
                        <span className="text-danger">₹{newPrice}.00</span>
                    </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p><strong>Getting more details? Set time slot, please call us.</strong></p>

                <div className="d-flex align-items-center">
                  <p className="fw-bold mb-0 me-3">Qty:</p>
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange("decrease")}>-</button>
                  <span className="px-3">{quantity}</span>
                  <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange("increase")}>+</button>
                </div>

                <div className="d-flex justify-content-start align-items-center">
                    <button 
                    className='mt-3 mb-3 btn btn-primary'
                    onClick={() => {
                        if (!selectedType || !selectedPeriod) {
                        toast.error("Please select a session type and period");
                        return;
                        }
                        
                        const cartItem = {
                        id: classId || Date.now().toString(),
                        name: serviceName,
                        image: serviceImage,
                        sessionType: selectedType,
                        sessionPeriod: selectedPeriod,
                        price: selectedPrice,
                        quantity: quantity,
                        time: serviceTime,
                        duration: serviceDuration,
                        trainer: serviceTrainer
                        };
                        
                        addToCart(cartItem);
                        toast.success("Added to cart successfully!");
                    }}
                    >
                    Add to Cart
                    </button>
                    <Link to="/home/cart" className='mt-3 mb-3 ms-3 btn btn-outline-primary'>View Cart</Link>
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

export default HomeclassDetails;
