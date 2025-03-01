// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import Footer from '../Home/FooterCopyright'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'

function ContactUs() {
    const { submitContactForm, loading } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error('Please fill in all required fields correctly');
            return;
        }
        
        console.log('Contact form data:', formData);
        
        const success = await submitContactForm(formData);
        
        if (success) {
            toast.success('Message has been sent successfully!', { duration: 3000 });
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } else {
            toast.error('Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <Toaster position="top-center" />
            <NavBar />
            <div className='container-fluid laptop-margin mb-5 '>
            <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >Contact Us</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-map-marker-alt text-danger"></i> Our Office Location</h5>
                                <p>Pavitram Dhyan Yoga Kendra <br /> 3/48, Sector-5, Rajendra Nagar <br /> Sahibabad, Ghaziabad U.P India <br /> 201005</p>
                            </div>
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-phone text-danger"></i> Contact Number</h5>
                                <p>9999592971, 9717189911</p>
                            </div>
                            <div className="p-3 border rounded mb-3">
                                <h5><i className="fas fa-envelope text-danger"></i> Email Address</h5>
                                <p>pavitramav@gmail.com <br /> pavitramyoga011@gmail.com</p>
                            </div>
                            <div className="p-3 border rounded">
                                <h5><i className="fab fa-skype text-danger"></i> Make a Video Call</h5>
                                <p>MascotSkype</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h4>Interested in discussing?</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name <span className='text-danger'>*</span></label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email <span className='text-danger'>*</span></label>
                                    <input 
                                        type="email" 
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Subject <span className='text-danger'>*</span></label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required 
                                    />
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-outline-success me-2"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send your message'}
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-danger"
                                    onClick={() => {
                                        setFormData({
                                            name: '',
                                            email: '',
                                            subject: '',
                                            phone: '',
                                            message: ''
                                        });
                                        setErrors({});
                                    }}
                                >
                                    Reset
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs