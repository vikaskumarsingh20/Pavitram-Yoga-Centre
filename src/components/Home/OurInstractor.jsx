/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BsSkype } from "react-icons/bs";
import { instructors } from "../data/instructors";


const InstructorCard = ({ instructor }) => {
return (
    <div className="item p-2">
    <div
        className="card border-0 shadow-sm h-100 instructor-card"
        style={{ width: "100%", overflow: "hidden" }}
    >
        <div className="img-wrapper position-relative overflow-hidden">
        <img
            src={instructor.img}
            className="card-img-top instructor-img"
            alt={instructor.name}
            style={{
            height: "280px",
            objectFit: "cover",
            }}
        />
        <div
            className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
            background: "rgba(0,0,0,0.4)",
            opacity: 0,
            transition: "opacity 0.5s ease",
            zIndex: 10,
            }}
        >
            <div className="social-icons d-flex gap-3">
            <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-white p-2 rounded-circle social-facebook"
                style={{
                background: "#4267B2",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "translateY(20px)",
                opacity: 0,
                transition: "all 0.3s ease",
                }}
            >
                <FaFacebook size={20} />
            </a>
            <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white p-2 rounded-circle social-twitter"
            style={{
                background: "#1DA1F2",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "translateY(20px)",
                opacity: 0,
                transition: "all 0.5s ease 0.1s",
            }}
            >
            <IoLogoTwitter size={20} />
            </a>
            <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white p-2 rounded-circle social-instagram"
            style={{
                background: "#E1306C",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "translateY(20px)",
                opacity: 0,
                transition: "all 0.4s ease 0.2s",
            }}
            >
            <RiInstagramFill size={20} />
            </a>
            <a
            href="https://www.skype.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white p-2 rounded-circle social-skype"
            style={{
                background: "#00AFF0",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "translateY(20px)",
                opacity: 0,
                transition: "all 0.8s ease 0.3s",
            }}
            >
            <BsSkype size={20} />
            </a>
            </div>
          </div>
        </div>
        <div className="card-body text-center py-4">
          <h4 className="fw-bold mb-1" style={{ fontSize: "1.2rem", color: "#333" }}>
            {instructor.name}
          </h4>
          <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
            {instructor.role}
          </p>
        </div>
      </div>
    </div>
  );
};

function OurInstructors() {
const settings = {
dots: true,
infinite: true,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
speed: 1000,
autoplaySpeed: 3000,
cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

return (
<div className="container-fluid py-5 instructor-section">
    <div className="text-center mb-5">
    {/* <h6 className="text-uppercase fw-bold text-primary mb-2 fs-5" >
        Our Team
    </h6> */}
    <h2 className="position-relative d-inline-block pb-2">
        Meet Our <span className="text-danger fw-bold">Instructors</span>
        <div className="position-absolute start-50 bottom-0 translate-middle-x" style={{ width: "80px", height: "3px", background: "linear-gradient(to right, #ffffff, #dc3545, #ffffff)" }}></div>
    </h2>
    <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
        Discover our team of professional yoga instructors who are dedicated to guiding you on your yoga journey
    </p>
    </div>
    <div className="container">
    <div className="slider-container px-3">
        <Slider {...settings}>
        {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
        </Slider>
    </div>
    </div>
</div>
  );
}

export default OurInstructors;

