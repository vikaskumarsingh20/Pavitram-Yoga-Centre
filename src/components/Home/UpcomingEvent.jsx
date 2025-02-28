/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {events} from "../../components/data/upcomingdata"

function EventCard({ event }) {
    return (
        <div className='col-md-6 d-md-flex flex-md-row d-flex flex-column justify-content-between align-items-center'>
            <div className='d-md-flex flex-md-column d-flex flex-column'>
                <p><i className="fa-solid fa-calendar-days text-danger"></i> :{event.title}</p>
                <p><i className="fa-solid fa-user-group text-danger me-1"></i> BY {event.speaker}</p>
                <p><i className="fa-solid fa-calendar-days text-danger"></i> {event.date}</p>

                <div className='d-flex justify-content-center align-items-center'>
                    {event.buttons.map((button, index) => (
                        <Link to={`/home/upcoming_events_details/${event.id}`} key={index} className={`me-2 mb-1 mt-1 btn btn-${button.variant}`}>
                            {button.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <img src={event.imgSrc} className="card-img-top" alt={event.title} style={{ height: '175px', borderRadius: '8px' }} />
            </div>
        </div>
    );
}

function UpcomingEvent() {

    return (
        <div className="bg-light p-2">
            <div>
                <h4 className='text-center mt-1 mb-2 fs-5'>UPCOMING EVENTS AND WORKSHOPS, WEBINARS.</h4>
            </div>

            <div className='row container mb-3 mt-3'>
                {events.slice(0, 2).map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
                <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                    <Link to="/home/upcoming_events" className="me-2 mb-1 btn btn-danger">More</Link>
                </div>
            </div>

        </div>
    )
}

export default UpcomingEvent