import img1 from "../../assets/Services/event1.jpg"
import img2 from "../../assets/Services/event2.jpg"
import { Button } from 'react-bootstrap'
function UpcomingEvent() {
    return (
        <div>
            <div>
                <h4 className='text-center mt-1 mb-2 fs-5'>UPCOMING EVENTS AND WORKSHOPS, WEBINARS.</h4>
            </div>

            <div className='row container mb-3 mt-3'>
                <div className='col-md-6 d-md-flex flex-md-row d-flex flex-column justify-content-between align-items-center'>
                    <div className='d-md-flex flex-md-column d-flex flex-column'>
                        <p><i className="fa-solid fa-calendar-days text-danger"></i> :THREE DAYS MEDITATION</p>
                        <p><i className="fa-solid fa-user-group text-danger me-1"></i> BY VIVEKADITYA JI</p>
                        <p><i className="fa-solid fa-calendar-days text-danger"></i> Nov 22, 2020 - Nov 24, 2020</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button variant="danger" className="me-2 mb-1 mt-1">View Details</Button>
                            <Button variant="primary" className="me-2 mb-1 mt-1">Paid</Button>
                            <Button variant="info" className="me-2 mb-1 mt-1">Online & Offline</Button>
                        </div>
                    </div>

                    <div>
                        <img src={img1} className="card-img-top" alt="..." style={{ height: '175px', borderRadius: '8px' }} />
                    </div>

                </div>
                <div className='col-md-6 d-md-flex flex-md-row d-flex flex-column justify-content-between align-items-center'>
                    <div className='d-md-flex flex-md-column d-flex flex-column'>
                        <p><i className="fa-solid fa-calendar-days text-danger"></i> HOW TO MANAGE STRESS</p>
                        <p><i className="fa-solid fa-user-group text-danger me-1"></i>GURU JI</p>
                        <p><i className="fa-solid fa-calendar-days text-danger me-1"></i>Dec 16, 2020 - Dec 18, 2020</p>

                        <div className='d-flex justify-content-center align-items-center'>
                            <Button variant="danger" className="me-2 mb-1 mt-1">View Details</Button>
                            <Button variant="primary" className="me-2 mb-1 mt-1">Paid</Button>
                            <Button variant="info" className="me-2 mb-1 mt-1">Online</Button>
                        </div>
                    </div>

                    <div>
                        <img src={img2} className="card-img-top" alt="..." style={{ height: '175px', borderRadius: '8px' }} />
                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                                    <Button variant="danger" className="me-2 mb-1">More</Button>
                                    </div>
            </div>

        </div>
    )
}

export default UpcomingEvent