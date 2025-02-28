import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import img1 from "../../assets/Services/event1.jpg";
import img2 from "../../assets/Services/event2.jpg";  
import { toast,Toaster } from "react-hot-toast";
import { useCart } from "../context/CartContext";
import NavBar from "../common/NavBar";
import Footer from "../Home/FooterCopyright";

// Sample events data - replace with your actual data import
const eventsData = [
{
    id: 1,
    title: 'THREE DAYS MEDITATION',
    speaker: 'BY VIVEKADITYA JI',
    date: 'Nov 22, 2020 - Nov 24, 2020',
    price: "999.00",
    duration: "Friday - Sunday",
    morning: "6 - 7 And 7 - 8",
    evening: "5 - 6 And 6 - 7",
    timezone: "( Indian Time Zone ), 22 November 2020",
    description: "Three days meditation sessions are powerful sessions for mind peace and full-body relaxation. This session will be conducted by Gurushree Acharya Vivekaditya Ji, a Spiritual Guru and philosopher.",
    image: img1
},
{
    id: 2,
    title: 'HOW TO MANAGE STRESS',
    speaker: 'GURU JI',
    date: 'Dec 16, 2020 - Dec 18, 2020',
    price: "1499.00",
    duration: "Monday - Wednesday",
    morning: "5 - 6 And 6 - 7",
    evening: "4 - 5 And 5 - 6",
    timezone: "( Indian Time Zone ), 15 December 2020",
    description: "Join us for a rejuvenating yoga retreat focusing on holistic wellness and spiritual growth. Experience transformation through ancient yoga practices.",
    image: img2
}
];


function UpcomingEventDetails() {
const { eventId } = useParams();
const [quantity, setQuantity] = useState(1);
const [event, setEvent] = useState(null);
const { addToCart } = useCart();

useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = eventsData.find(event => event.id === parseInt(eventId));
    setEvent(foundEvent);
}, [eventId]);

const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
};

const decrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
};

const handleAddToCart = () => {
    if (!event) return;
    
    // Create cart item object formatted according to what the Cart component expects
    const cartItem = {
        id: event.id,
        name: event.title,
        price: event.price,
        image: event.image,
        quantity: quantity,
        duration: event.duration,
        time: `Morning: ${event.morning}, Evening: ${event.evening}`,
        sessionPeriod: event.date,
        sessionType: "Event"
    };
    
    // Use the addToCart function from CartContext
    addToCart(cartItem);
    toast.success('Item added to cart!');
};

if (!event) {
    return (
    <>
        <NavBar />
        <div className="container mt-5">
        <h2>Event not found</h2>
        </div>
        <Footer />
    </>
    );
}

return (
    <>
    <Toaster/>
      <NavBar />
      <div className="container-fluid laptop-margin">
        {/* Banner Section */}
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
        <h1 className="text-center text-white z-2">{event.title}</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
            Home
          </Link>
        </div>

        {/* Event Details Section */}
        <div className="container mt-5">
          <div className="row d-flex align-items-center">
            {/* Event Image */}
            <div className="col-md-5">
            <img
                src={event.image}
                className="img-fluid"
                alt={event.title}
                // style={{ borderRadius: "8px" }}
              />
            </div>

            {/* Event Details */}
            <div className="col-md-7">
            <h2 className="fw-bold">{event.title}</h2>
            <p className="fs-5">
                <strong>Price: ₹ {event.price}</strong>
            </p>
            <p> <strong>Teacher : </strong>BY {event.speaker}</p>
            <p> <strong>Duration : </strong>{event.duration}</p>
            <p> <strong>Morning :</strong>Morning: {event.morning}</p>
            <p> <strong>Evening :</strong>Evening: {event.evening}</p>
            <p> <strong>Timezone :</strong>{event.timezone}</p>
            <p><strong>Description:</strong> {event.description}</p>

              {/* Quantity Selector & Add to Cart Button */}
            <div className="d-flex align-items-center">
                <label className="fw-bold me-2">Qty:</label>
                <button className="btn btn-light border" onClick={decrementQuantity}>-</button>
                <span className="mx-2">{quantity}</span>
                <button className="btn btn-light border" onClick={incrementQuantity}>+</button>
            </div>

            <button className="btn btn-primary mt-3 mb-3" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpcomingEventDetails;
