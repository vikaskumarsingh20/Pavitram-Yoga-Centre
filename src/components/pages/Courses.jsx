import Footer from "../Home/FooterCopyright";
import NavBar from "../common/NavBar";
import img1 from "../../assets/Services/course1.png";
import img2 from "../../assets/Services/course2.jpg";
import img3 from "../../assets/Services/course3.jpeg";
import { Link } from "react-router-dom";

function Courses() {
const courses = [
{
    id: 1,
    title: "ONE YEAR TRAINING COURSE",
    time: "9 - 11",
    trainer: "Pavitram Team",
    price: "25000.00",
    image:img1,
},
{
    id: 2,
    title: "SIX MONTHS TRAINING",
    time: "9 - 11",
    trainer: "Pavitram Team",
    price: "18000.00",
    image:img2,
},
{
    id: 3,
    title: "THREE MONTHS TRAINING",
    time: "9 - 12",
    trainer: "Pavitram Team",
    price: "9700.00",
    image: img3,
},
  ];
  return (
    <>
      <NavBar />
      {/* Header Section */}
      <div className="container-fluid laptop-margin">
      <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >  Courses</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container my-5">
        {courses.map((course, index) => (
          <div key={index} className="row align-items-center mb-4">
            <div className="col-md-6">
              <h5 className="  fw-bold " style={{ color: 'rgb(42, 23, 111)' }}>
                <i className="bi bi-calendar"></i> {course.title}
              </h5>
              <p><strong>Time :</strong> {course.time}</p>
              <p><strong>Trainer :</strong> {course.trainer}</p>
            <p><strong>Price :</strong> ₹{course.price}</p>
            <Link to={`/home/course_details/${course.id}`} className="btn btn-danger me-2">View Details</Link>
              {index === 2 && <button className="btn btn-primary">At Center</button>}
            </div>
            <div className="col-md-6 text-center mt-2">
              <img src={course.image} alt={course.title} className="img-fluid rounded" style={{ height: '200px', width: '400px' }}/>
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default Courses;
