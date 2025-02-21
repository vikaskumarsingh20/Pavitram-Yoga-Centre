import titlelogo from "../../assets/images/title-icon.png"
import { Button } from 'react-bootstrap'
import img1 from "../../assets/Services/course1.png"
import img2 from "../../assets/Services/course2.jpg"
import img3 from "../../assets/Services/course3.jpeg"

function LatestCourses() {
    return (
        <div className="bg-light">
            <p className='border border-3 border-dark bg-light'></p>
            <h2 className='text-center'>Latest <span className='text-danger'>Courses</span> </h2>
            <img src={titlelogo} className='mx-auto d-block mb-3' alt="Title Logo" />

            <div className="container">
            <div className="row">
            <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>ONE YEAR TRAINING COURSE..</h4>
                            <img src={img1} className="card-img-top" alt="..." style={{ height: "278px" }} />
                            <div className="d-flex justify-content-center">
                            <Button variant="danger" className="me-2 mb-2 mt-1">View Details</Button>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>SIX MONTHS TRAINING..</h4>
                            <img src={img2} className="card-img-top" alt="..." style={{ height: "278px" }} />
                            <div className="d-flex justify-content-center">
                            <Button variant="danger" className="me-2 mb-2 mt-1">View Details</Button>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3 border-0">
                            <h4 className='text-center mt-1 mb-2 fs-5'>THREE MONTHS TRAINING..</h4>
                            <img src={img3} className="card-img-top" alt="..." style={{ height: "278px" }} />
                            <div className="d-flex justify-content-center">
                            <Button variant="danger" className="me-2 mb-2 mt-1">View Details</Button>
                            <Button variant="primary" className="me-2 mb-2 mt-1">At Center</Button>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                    <Button variant="danger" className="me-2 mb-1">More</Button>
                    </div>
                    
            </div>
            </div>

        </div>
    )
}

export default LatestCourses