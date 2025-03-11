// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense, useState } from 'react';
// import NavBar from '../common/NavBar';
// import Footer from '../Home/FooterCopyright';
import { images } from '../../components/data/images';
import { Link } from 'react-router-dom';
// Lazy load components
const NavBar = lazy(() => import('../common/NavBar'));
const Footer = lazy(() => import('../Home/FooterCopyright'));


function Gallery() {
    const [activeTab, setActiveTab] = useState('image');

    return (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <Suspense fallback={<div className="text-center">Loading...</div>}>
                <NavBar />
            </Suspense>
          </div>

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
                  loading='lazy'
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
        <Suspense fallback={<div>Loading Footer...</div>}>
                <Footer />
            </Suspense>
        </>
    );
}

export default Gallery;
