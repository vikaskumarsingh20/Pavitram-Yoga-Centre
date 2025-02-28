/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "../common/NavBar";
import Footer from "../Home/FooterCopyright";
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "../context/CartContext";
import { coursesData } from "../data/coursedata";


function CourseDetails() {
  const { addToCart } = useCart();
const [quantity, setQuantity] = useState(1);
const { courseId } = useParams();

// Find the course that matches the courseId
const course = coursesData.find((course) => course.id === parseInt(courseId));

useState(() => {
if (course) {
    // toast.success(`${course.title} details loaded successfully!`);
}
}, [course]);

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
                <p><strong>Price :</strong> ₹{course.price.toLocaleString()}</p>
                <p><strong>Time :</strong> {course.time}</p>
                <p><strong>Days :</strong> {course.days}</p>
                <p><strong>Duration :</strong> {course.duration}</p>
                <p > <strong>Description :</strong>{course.description}</p>

                {/* Quantity Selector */}
                <div className="d-flex align-items-center">
                  <strong className="me-2">Qty :</strong>
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
                    duration: course.duration,
                    time: course.time,
                    sessionPeriod: course.days,
                    sessionType: "Course",
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
