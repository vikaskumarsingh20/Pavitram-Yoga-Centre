/* eslint-disable react/prop-types */
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'
import { Button } from 'react-bootstrap';
import img1 from "../../assets/Services/event1.jpg"
import img2 from "../../assets/Services/event2.jpg"
import { Link } from 'react-router-dom';

function UpComingEvent() {

    const events = [
        {
            title: 'THREE DAYS MEDITATION',
            speaker: 'BY VIVEKADITYA JI',
            date: 'Nov 22, 2020 - Nov 24, 2020',
            imgSrc:img1,
            buttons: [
                { variant: 'danger', label: 'View Details' },
                { variant: 'primary', label: 'Paid' },
                { variant: 'info', label: 'Online & Offline' }
            ]
        },
        {
            title: 'HOW TO MANAGE STRESS',
            speaker: 'GURU JI',
            date: 'Dec 16, 2020 - Dec 18, 2020',
            imgSrc:img2,
            buttons: [
                { variant: 'danger', label: 'View Details' },
                { variant: 'primary', label: 'Paid' },
                { variant: 'info', label: 'Online' }
            ]
        }
    ];

    const EventCard = ({ title, speaker, date, imgSrc, buttons }) => (
        <div className='col-md-6 d-md-flex flex-md-row d-flex flex-column justify-content-between align-items-center'>
            <div className='d-md-flex flex-md-column d-flex flex-column'>
                <p><i className="fa-solid fa-calendar-days text-danger"></i> {title}</p>
                <p><i className="fa-solid fa-user-group text-danger me-1"></i> {speaker}</p>
                <p><i className="fa-solid fa-calendar-days text-danger me-1"></i> {date}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    {buttons.map(({ variant, label }, index) => (
                        <Button key={index} variant={variant} className="me-2 mb-1 mt-1">{label}</Button>
                    ))}
                </div>
            </div>
            <div>
                <img src={imgSrc} className="card-img-top" alt="Event" style={{ height: '175px', borderRadius: '8px' }} />
            </div>
        </div>
    );
    const HeaderSection = ({ title, subtitle }) => (
        <div className="container-fluid laptop-margin">
            <div className="d-flex flex-column align-items-center justify-content-center py-5 text-white" style={{ backgroundColor: 'rgb(42, 23, 111)' }}>
                <Link to="/">
                    <button className="btn  text-white">
                        <h1 className="text-center ">{title}</h1>
                        <p>{subtitle}</p>
                    </button>
                </Link>
            </div>
        </div>
    );
    return (
<>
            <NavBar />
            <HeaderSection title="UPCOMING EVENT" subtitle="Home  • Upcoming Event" />
            <div>
                <h4 className='text-center mt-1 mb-2 fs-5 mt-4'>UPCOMING EVENTS AND WORKSHOPS, WEBINARS.</h4>
            </div>
            <div className='row container mb-3 mt-3'>
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                <Button variant="danger" className="me-2 mb-1">More</Button>
            </div>
            <Footer />
        </>
    )
}

export default UpComingEvent