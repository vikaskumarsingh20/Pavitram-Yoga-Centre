// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/imh7.jpg";
import NavBar from '../common/NavBar';
import Footer from '../Home/FooterCopyright';
import { Link } from 'react-router-dom';
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
];

function Gallery() {
    const [activeTab, setActiveTab] = useState('image');

    return (
        <>
            <NavBar />

            <div className='container-fluid laptop-margin mb-5 '>
            <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >Gallery</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>

            <div className="d-flex justify-content-center mb-3 mt-3">
                <button
                    className={`btn ${activeTab === 'image' ? 'btn-danger' : 'btn-light'} me-2`}
                    onClick={() => setActiveTab('image')}
                >
                    Image
                </button>
                <button
                    className={`btn ${activeTab === 'video' ? 'btn-danger' : 'btn-light'}`}
                    onClick={() => setActiveTab('video')}
                >
                    Video
                </button>
            </div>

            {activeTab === 'image' ? (
                <div className="row">
                    {images.map((src, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-3">
                        <img
                  src={src}
                  className="img-fluid rounded shadow"
                  style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                  alt={`Gallery ${index + 1}`}
                />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <p>No videos available</p>
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}

export default Gallery;
