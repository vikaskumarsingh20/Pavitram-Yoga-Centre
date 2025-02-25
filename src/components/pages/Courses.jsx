import Footer from "../Home/FooterCopyright";
import NavBar from "../common/NavBar";
import img1 from "../../assets/Services/course1.png";
import img2 from "../../assets/Services/course2.jpg";
import img3 from "../../assets/Services/course3.jpeg";

function Courses() {
  const courses = [
    {
      title: "ONE YEAR TRAINING COURSE",
      time: "9 - 11",
      trainer: "Pavitram Team",
      price: "25000.00",
      image:img1,
    },
    {
      title: "SIX MONTHS TRAINING",
      time: "9 - 11",
      trainer: "Pavitram Team",
      price: "18000.00",
      image:img2,
    },
    {
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
        <div className="d-flex flex-column align-items-center justify-content-center py-5 text-white"
        style={{ backgroundColor: 'rgb(42, 23, 111)' }}
        >
          <h1 className="text-center">OUR COURSES</h1>
          <p>Home &nbsp; ◦ &nbsp; Our Courses</p>
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
              <p><strong>Time:</strong> {course.time}</p>
              <p><strong>Trainer:</strong> {course.trainer}</p>
              <p><strong>Price:</strong> {course.price}</p>
              <button className="btn btn-info me-2">View Details</button>
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
