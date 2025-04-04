/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import {testimonial} from "../data/Testimonial"

function Testimonial() {
 
  

  

  const InstructorCard = ({ instructor }) => {
    return (
      // <div className="container"></div>
      <div className="text-center mb-5 p-2">
        <div className="card shadow-sm border-0 p-4 mx-auto h-80" style={{minHeight:"300px", maxWidth: "500px", borderRadius: "12px" }}>
          <div className="card-body">
            <span className="fs-5 fw-semibold text-primary">{instructor.title}</span>
            <small><p className="mt-3 text-muted ">{instructor.content}</p></small>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <img src={instructor.img} alt={instructor.name} className="me-3 rounded-circle" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
              <div className="d-flex flex-column">
                <span className="fs-6 fw-bold">{instructor.name}</span>
                <span className="text-muted">{instructor.profession}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
    nextArrow: false,
    prevArrow: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid mx-auto mt-5 mb-5 testimonial">
      <div className="text-center mb-4">
        <h2 className="text-light py-4 fw-bold fs-3">What Our Students Say</h2>
        <div className="animate__animated animate__fadeInUp animate__slow">
          <div className="animate__animated animate__heartBeat animate__infinite animate__slow">
            <i className="fa fa-quote-left text-primary" style={{ fontSize: "40px" }}></i>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonial.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
