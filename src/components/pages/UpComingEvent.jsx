/* eslint-disable react/prop-types */
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'
import {events} from "../../components/data/upcomingdata"
import { Link } from 'react-router-dom';

function UpComingEvent() {

    const EventCard = ({event}) => (
        <div className='col-md-6 d-md-flex flex-md-row d-flex flex-column justify-content-between align-items-center'>
            <div className='d-md-flex flex-md-column d-flex flex-column'>
                <p><i className="fa-solid fa-calendar-days text-danger"></i> {event.title}</p>
                <p><i className="fa-solid fa-user-group text-danger me-1"></i> {event.speaker}</p>
                <p><i className="fa-solid fa-calendar-days text-danger me-1"></i> {event.date}</p>
                <div className='d-flex justify-content-center align-items-center'>
                {event.buttons.map((button, index) => (
                        <Link to={`/home/upcoming_events_details/${event.id}`} key={index} className={`me-2 mb-1 mt-1 btn btn-${button.variant}`}>
                            {button.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <img src={event.imgSrc} className="card-img-top" alt="Event" style={{ height: '175px', borderRadius: '8px' }} />
            </div>
        </div>
    );
    const HeaderSection = ({ title }) => (
        <div className="container-fluid laptop-margin">
            <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" > {title}</h1>  
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
        </div>
    );
    return (
<>
            <NavBar />
            <HeaderSection title="upcoming Event"  />
            <div>
                <h4 className='text-center mt-1 mb-2 fs-5 mt-5 mb-5'>UPCOMING EVENTS AND WORKSHOPS, WEBINARS.</h4>
            </div>
            <div className='row container mb-3 mt-3'>
            {events.slice(0, 2).map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default UpComingEvent