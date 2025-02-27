import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../common/NavBar";
import Footer from "../Home/FooterCopyright";
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "../context/CartContext";
import course1Image from "../../assets/Services/course1.png";
import course2Image from "../../assets/Services/course2.jpg";
import course3Image from "../../assets/Services/course3.jpeg";

// Course data array - same as in Courses.jsx
const coursesData = [
  {
      id: 1,
      title: "ONE YEAR TRAINING COURSE",
      time: "9 - 11",
      trainer: "Pavitram Team",
      price: "25000.00",
      days: "Monday - Friday",
      duration: "2 Hours",
      description: "Best for beginners",
      image: course1Image,
  },
  {
      id: 2,
      title: "SIX MONTHS TRAINING",
      time: "9 - 11",
      trainer: "Pavitram Team",
      price: "18000.00",
      duration: "2 Hours",
      days: "Monday - Friday",
      description: "Remove your stress and be happy",
      image:course2Image,
  },
  {
      id: 3,
      title: "THREE MONTHS TRAINING",
      time: "9 - 12",
      trainer: "Pavitram Team",
      price: "9700.00",
      duration: "2 Hours",
      days: "Monday - Friday",
      description: " Beware of your body",
      image: course3Image,
      }
];

function CourseDetails() {
  const { addToCart } = useCart();
const [quantity, setQuantity] = useState(1);
const { courseId } = useParams();

  // Find the course that matches the courseId
  const course = coursesData.find((course) => course.id === parseInt(courseId));

  return (
    <>
    <Toaster/>
      <NavBar />
      <div className="container-fluid laptop-margin">
        {/* Banner Section */}
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white z-2">Course Details</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">Home</Link>
        </div>

        {/* Course Details Section */}
        <div className="container my-5">
          {!course ? (
            <div className="alert alert-warning">
              <h3>Course not found</h3>
              <p>The course you're looking for doesn't exist or has been removed.</p>
              <Link to="/home/courses" className="btn btn-primary">Back to Courses</Link>
            </div>
          ) : (
            <div className="row align-items-center">
              {/* Image Section */}
              <div className="col-lg-5 col-md-6">
                <img src={course.image} alt={course.title} className="img-fluid rounded" />
              </div>

              {/* Content Section */}
              <div className="col-lg-7 col-md-6">
                <h2 className="fw-bold">{course.title}</h2>
                <p><strong>Price :</strong> ₹{course.price.toLocaleString()}.00</p>
                <p><strong>Time :</strong> {course.time}</p>
                <p><strong>Days :</strong> {course.days}</p>
                <p><strong>Duration :</strong> {course.duration}</p>
                <p > <strong>Description :</strong>{course.description}</p>

                {/* Quantity Selector */}
                <div className="d-flex align-items-center">
                  <strong className="me-2">Qty:</strong>
                  <button className="btn btn-light" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <input type="text" value={quantity} readOnly className="text-center mx-2 form-control" style={{ width: "50px" }} />
                  <button className="btn btn-light" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    const courseItem = {
                      id: course.id,
                      name: course.title,
                      price: course.price,
                      image: course.image,
                      quantity: quantity,
                    };
                    addToCart(courseItem);
                    toast.success("Course added to cart successfully!");
                  }}
                >
                  Add to cart
                </button>

             </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseDetails;
