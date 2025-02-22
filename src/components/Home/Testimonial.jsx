/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/Instractor/guruji.jpg";

function Testimonial() {
  const instructors = [
    { id: 1, name: "John Doe", profession: "Software Engineer", title: "Great Experience!", content: "This was an amazing journey. Highly recommend it!", img: img1 },
    { id: 2, name: "John Doe", profession: "Software Engineer", title: "Absolutely Worth It!", content: "The experience was beyond my expectations. Truly transformative!", img: img1 },
    { id: 3, name: "John Doe", profession: "Software Engineer", title: "Loved Every Moment!", content: "I gained so much knowledge and confidence. A fantastic journey!", img: img1 },
    { id: 4, name: "John Doe", profession: "Software Engineer", title: "Highly Recommended!", content: "A well-structured and insightful program. Definitely worth it!", img: img1 },
    { id: 5, name: "John Doe", profession: "Software Engineer", title: "Life-Changing!", content: "This experience has truly shaped my career. Thank you!", img: img1 },
  ];
  

  

  const InstructorCard = ({ instructor }) => {
    return (
      // <div className="container"></div>
      <div className="text-center mb-5   p-2">
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
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
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
    <div className="container mx-auto mt-5 mb-5 testimonial">
      <h2 className="text-center mb-4 text-light py-4">Testimonials</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
