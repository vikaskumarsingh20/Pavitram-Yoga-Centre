// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer  text-white">
            <Container className="pt-5 pb-4">
                <Row className="border-bottom">
                    <Col sm={6} md={3}>
                        <div className="widget">
                            <h5 className="widget-title">Pavitram Yoga</h5>
                            <p className='text-justify'>
                                Founded by <strong>Guru Shree Acharya Vivekaditya</strong>, Pavitram is a hub of transformative experiences,
                                where <em>Yoga</em>, <em>Meditation</em>, and <em>Self-Discovery</em> come alive in the sacred space of <strong>KARMYOGA INTERNATIONAL (regd trust)</strong>.
                                Since its inception on <strong>11 November 2011</strong>, Pavitram has been a beacon of <em>Happiness</em>, <em>Peace</em>, and <em>Creativity</em>,
                                fostering <em>Harmony</em> and cooperation in society.
                            </p>
                        </div>
                    </Col>

                    <Col sm={6} md={3}>
                        <div className="widget">
                            <h5 className="widget-title">Useful Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/home/index" className="text-decoration-none text-white "><i className="fas fa-home me-2"></i>Home</a></li>
                                <li><a href="/home/aboutus" className="text-decoration-none text-white"><i className="fas fa-info-circle me-2"></i>About us</a></li>
                                <li><a href="/home/acharya_vivekaditya" className="text-decoration-none text-white"><i className="fas fa-user-tie me-2"></i>Acharya Vivekaditya Ji</a></li>
                                <li><a href="https://www.youtube.com/channel/UCsq3lzl_Y1NSYswisfJ17wA" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white"><i className="fab fa-youtube me-2"></i>Teachings on YouTube</a></li>
                                <li><a href="/home/blog" className="text-decoration-none text-white"><i className="fas fa-book me-2"></i>Daily Inspiration</a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col sm={6} md={3}>
                        <div className="widget">
                            <h5 className="widget-title">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-map-marker me-1"></i> Pavitram Dhyan Yoga Kendra, Rajendra Nagar, Sahibabad, Ghaziabad, U.P India 201005</li>
                                <li><i className="fa fa-phone me-1"></i> <a href="tel:9999592971" className="text-white text-decoration-none hover-underline">9999592971, 9717189911</a></li>
                                <li><i className="fa fa-envelope me-1"></i> <a href="mailto:pavitramav@gmail.com" className="text-white text-decoration-none hover-underline">pavitramav@gmail.com</a></li>
                                <li><i className="fa fa-globe me-1"></i> <a href="http://www.pavitram.org" className="text-white text-decoration-none hover-underline">www.pavitram.org</a></li>
                            </ul>
                        </div>
                    </Col>


                    <Col sm={6} md={3}>
                        <div className="widget">
                            <h5 className="widget-title">Opening Hours</h5>
                            <ul className="list-unstyled">
                                <li><span>Morning: </span> 6.00 am - 12.00 pm</li>
                                <li><span>Evening: </span> 4:00 pm - 8:00 pm</li>
                            </ul>
                            <h5 className="widget-title mt-3">Connect With Us</h5>
                            <ul className="social-icons list-inline">
                                <li className="list-inline-item me-3"><a href="https://www.facebook.com/pavitramyoga/?ref=hl"><i className="fab fa-facebook-f text-white"></i></a></li>
                                <li className="list-inline-item me-3"><a href="https://twitter.com/pavitramyoga"> <i className="fab fa-twitter text-white"></i></a></li>
                                <li className="list-inline-item me-3"><a href="https://www.youtube.com/channel/UCsq3lzl_Y1NSYswisfJ17wA"> <i className="fab fa-instagram text-white"></i></a></li>
                                <li className="list-inline-item me-3"><a href="#"><i className="fab fa-youtube text-white"></i></a></li>
                                <li className="list-inline-item me-3"><a href="#"><i className="fab fa-linkedin text-white"></i></a></li>
                                <li className="list-inline-item me-3"><a href="#"><i className="fab fa-whatsapp text-white"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom footer-bottom text-white text-center py-2">
                <Container>
                    <Row>
                        <Col md={8}>
                            <p>Copyright ©2020 Pavitram Yoga. All Rights Reserved</p>
                        </Col>
                        <Col md={4}>
                            <ul className="list-inline text-muted d-flex justify-content-center mb-0">
                                <li className="list-inline-item"><a className="text-decoration-none text-white" href="/home/privacy_policy">Privacy Policy</a></li>
                                <li className="list-inline-item"><a className="text-decoration-none text-white " href="/home/terms_and_conditions">Terms And Conditions</a></li>
                                <li className="list-inline-item"><a className="text-decoration-none text-white" href="/home/refund_policy">Refund Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
