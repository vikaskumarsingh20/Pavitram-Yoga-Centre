/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import titlelogo from "../../assets/images/title-icon.png"
import { coursesData } from '../data/coursedata'


function LatestCourses() {
      const CourseCard = ({ course }) => {
        return (
          <div className="col-md-4 mb-4">
            <div className="card mb-3 border-0">
              <h4 className='text-center mt-1 mb-2 fs-5'>{course.title}</h4>
              <img src={course.image} className="img-fluid rounded border-0 card-img-top" alt={course.title} style={{ height: "278px" }} />
              {/* <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{ minHeight: '250px', maxHeight: '250px' }} /> */}
              <div className="d-flex justify-content-center">
                {course.buttons.map((btn, index) => (
                <Link to={`/home/course_details/${course.id}`} key={index} className={`btn ${btn === 'View Details' ? 'btn-danger' : 'btn-primary'} me-2 mb-2 mt-1`}>
                    {btn}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      };
      
      return (
        <>
          <p className='border border-3 border-dark bg-light'></p>
          <h2 className='text-center'>Latest <span className='text-danger'>Courses</span></h2>
          <img src={titlelogo} className='mx-auto d-block mb-3' alt="Title Logo" />
    
          <div className="container">
            <div className="row">
            {coursesData.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <Link to="/home/Courses" className="btn btn-danger mb-3">More</Link>
            </div>
          </div>
        </>
      );
}

export default LatestCourses