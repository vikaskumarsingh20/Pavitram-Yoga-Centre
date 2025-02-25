/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { BsSkype } from "react-icons/bs";
import img1 from "../../assets/Instractor/guruji.jpg";
import img2 from "../../assets/Instractor/promodguruji.jpg";
import img3 from "../../assets/Instractor/vikesh.jpg";
import img4 from "../../assets/Instractor/raja.jpg";
import img5 from "../../assets/Instractor/khagi.jpg";
import img6 from "../../assets/Instractor/lisa.jpg";
import img7 from "../../assets/Instractor/team.jpg";


const instructors = [
  { id: 1, name: "Achrya vivekaditya ji", role: "Spiritual Guru, Wellness & Meditation Master", img: img1 },
  { id: 2, name: "Sh.Pramod sharma", role: "Meditation & Wellness guru", img: img2 },
  { id: 3, name: "Shri Vikeshananda", role: "Fitness & Weight mgt Yoga Expert", img: img3 },
  { id: 4, name: "Mr. Aditya Pratap", role: "Sport Yoga Trainer", img: img4 },
  { id: 5, name: "MISS. KHAGI THAPA", role: "Yoga Teacher", img: img5 },
  { id: 6, name: "Lisa Fren", role: "Yoga Teacher", img: img6 },
  { id: 7, name: "Team", role: "Yoga Teacher", img: img7 },

];

// Reusable Instructor Card Component
const InstructorCard = ({ instructor }) => {
  return (
    <div className="item">
      <div className="card border-0 p-3 mx-auto" style={{ minWidth: "250px", maxWidth: "350px",minHeight:"400px" }}>
        <img
          src={instructor.img}
          className="card-img-top"
          alt={instructor.name}
          style={{ height: "230px" }}
        />
        <div className="card-body text-center">
          <h4 className="fw-bold fs-6 lh-1">{instructor.name}</h4>
          <small><p>{instructor.role}</p></small>
          <div className="d-flex justify-content-center gap-3 align-items-center lh-1">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary fs-6"  ><FaFacebook/></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-info fs-6"><IoLogoTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-danger fs-6"><RiInstagramFill /></a>
            <a href="https://www.skype.com/en/" target="_blank" rel="noopener noreferrer" className="text-success fs-6"><BsSkype /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

function OurInstructors() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <div className="container-fluid mt-2 mb-2 ">
      {/* <p className="border border-3 border-dark bg-light"></p> */}
      <h2 className="text-center">
        Meet Our <span className="text-danger">Instructors</span>
      </h2>
      <div className="container mt-4">
        <div className="slider-container">
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
