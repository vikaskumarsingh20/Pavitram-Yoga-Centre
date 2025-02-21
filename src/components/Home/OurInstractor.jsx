/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

// Import images
import img1 from "../../assets/Instractor/guruji.jpg";
import img2 from "../../assets/Instractor/guruji.jpg";
import img3 from "../../assets/Instractor/guruji.jpg";
import img4 from "../../assets/Instractor/guruji.jpg";
import img5 from "../../assets/Instractor/guruji.jpg";

// Dummy Instructor Data (You can fetch this from an API too)
const instructors = [
  { id: 1, name: "achrya vivekaditya ji", role: "Expert Yoga Teacher", img: img1 },
  { id: 2, name: "Ramesh Yogi", role: "Meditation Guru", img: img2 },
  { id: 3, name: "Sita Devi", role: "Ayurveda Specialist", img: img3 },
  { id: 4, name: "Mohan Das", role: "Spiritual Guide", img: img4 },
  { id: 5, name: "Priya Sharma", role: "Wellness Coach", img: img5},
];

// Reusable Instructor Card Component
const InstructorCard = ({ instructor }) => {
  return (
    <div className="item">
      <div className="card border-0 p-2">
        <img
          src={instructor.img}
          className="card-img-top"
          alt={instructor.name}
          style={{ height: "230px" }}
        />
        <div className="card-body text-center">
          <h4 className="fw-bold fs-5 lh-1">{instructor.name}</h4>
          <p>{instructor.role}</p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-3 align-items-center">
            <i className="fab fa-facebook-f" style={{ borderRadius: "50%" }}></i>
            <i className="fab fa-twitter" style={{ borderRadius: "50%" }}></i>
            <i className="fab fa-instagram" style={{ borderRadius: "50%" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

function OurInstructors() {
  useEffect(() => {
    // Ensure OwlCarousel initializes correctly
    window.$(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 },
      },
    });
  }, []);

  
  return (
    <div className="container-fluid mt-4 mb-5">
      <p className="border border-3 border-dark bg-light"></p>
      <h2 className="text-center">
        Meet Our <span className="text-danger">Instructors</span>
      </h2>

      {/* Owl Carousel */}
      <div className="container mt-4">
        <OwlCarousel className="owl-theme">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default OurInstructors;
