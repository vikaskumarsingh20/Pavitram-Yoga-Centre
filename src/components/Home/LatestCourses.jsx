import titlelogo from "../../assets/images/title-icon.png"
import { Button } from 'react-bootstrap'
import img1 from "../../assets/Services/course1.png"
import img2 from "../../assets/Services/course2.jpg"
import img3 from "../../assets/Services/course3.jpeg"

function LatestCourses() {
    const courses = [
        {
          title: 'ONE YEAR TRAINING COURSE',
          image:img1,
          buttons: ['View Details']
        },
        {
          title: 'SIX MONTHS TRAINING',
          image:img2,
          buttons: ['View Details']
        },
        {
          title: 'THREE MONTHS TRAINING',
          image: img3,
          buttons: ['View Details', 'At Center']
        }
      ];
      const CourseCard = ({ course }) => {
        return (
          <div className="col-md-4 mb-4">
            <div className="card mb-3 border-0">
              <h4 className='text-center mt-1 mb-2 fs-5'>{course.title}</h4>
              <img src={course.image} className="img-fluid rounded border-0 card-img-top" alt={course.title} style={{ height: "278px" }} />
              {/* <img src={service.image} alt={service.title} className="img-fluid rounded border-0" style={{ minHeight: '250px', maxHeight: '250px' }} /> */}
              <div className="d-flex justify-content-center">
                {course.buttons.map((btn, index) => (
                  <button key={index} className={`btn ${btn === 'View Details' ? 'btn-danger' : 'btn-primary'} me-2 mb-2 mt-1`}>
                    {btn}
                  </button>
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
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <button className="btn btn-danger mb-3">More</button>
            </div>
          </div>
        </>
      );
}

export default LatestCourses