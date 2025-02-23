// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img5.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/imh7.jpg";
import Slider from 'react-slick';

function OurGallery() {
    const gallery = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrow: true,
        mouseHover: true,
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
        <div className="container-fluid mt-4 mb-5 ">
      <p className="border border-3 border-dark bg-light"></p>
      <h2 className="text-center">
          Our <span className="text-danger">Gallery</span>
      </h2>
      <div className="container mt-4">
        <div className="slider-container">
          <Slider {...settings}>

            {gallery.map((gallery) => (
              <div key={gallery.id} className="text-center p-0">
                <img src={gallery.img} alt="gallery" className="img-fluid  " style={{minHeight:"220px", maxHeight:"220px"}} />
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
    )
}

export default OurGallery