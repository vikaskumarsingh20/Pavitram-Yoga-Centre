/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {events} from "../../components/data/upcomingdata"
// import "./UpcomingEvent.css"

function EventCard({ event }) {
    return (
        <div className='col-lg-6 mb-4'>
            <div className='event-card p-3 h-100'>
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

function UpcomingEvent() {
    return (
        <section className="upcoming-events-section py-5">
            <div className="container">
                <h2 className='text-center mb-4'>
                    Upcoming Events and Workshops, Webinars
                </h2>
                
                <div className='row justify-content-center'>
                    {events.slice(0, 2).map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                
                <div className="text-center mt-4">
                    <Link 
                        to="/home/upcoming_events" 
                        className="btn btn-danger px-4"
                    >
                        View More Events
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default UpcomingEvent