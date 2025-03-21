/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { events } from "../../components/data/upcomingdata";
import NavBar from '../common/NavBar';
import Footer from '../Home/FooterCopyright';
// import "./UpComingEvent.css";

function EventCard({ event }) {
    return (
        
        <div className='col-lg-6 mb-4'>
            <div className='event-card p-4 h-100'>
                <div className='row align-items-center'>
                    <div className='col-md-7 mb-3 mb-md-0'>
                        <div className='event-info'>
                            <h5 className='event-title'>
                                <i className="fa-solid fa-calendar-days text-danger me-2"></i>
                                {event.title}
                            </h5>
                            <p className='speaker-info mb-2'>
                                <i className="fa-solid fa-user-group text-danger me-2"></i>
                                By {event.speaker}
                            </p>
                            <p className='date-info mb-3'>
                                <i className="fa-solid fa-calendar-days text-danger me-2"></i>
                                {event.date}
                            </p>
                            <div className='event-buttons'>
                                {event.buttons.map((button, index) => (
                                    <Link 
                                        to={`/home/upcoming_events_details/${event.id}`} 
                                        key={index} 
                                        className={`btn btn-${button.variant} me-2 mb-2`}
                                    >
                                        {button.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='event-image-container'>
                            <img 
                                src={event.imgSrc} 
                                className="event-image" 
                                alt={event.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeaderSection({ title }) {
    return (
        <div className="container-fluid laptop-margin">
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white z-2" > {title}</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
            Home
          </Link>
        </div>
      </div>
    );
}

function UpComingEvent() {
    return (
        <>
            <NavBar />
            <HeaderSection title="Upcoming Events" />
            
            <section className="upcoming-events-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">
                        Upcoming Events and Workshops, Webinars
                    </h2>
                    
                    <div className="row justify-content-center">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
}

export default UpComingEvent;