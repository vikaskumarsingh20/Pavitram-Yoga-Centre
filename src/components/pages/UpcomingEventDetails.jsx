import { Link } from "react-router-dom";
 
import img1 from "../../assets/Services/event1.jpg"; // Replace with actual path
import NavBar from "../common/NavBar";
import Footer from "../Home/FooterCopyright";

function UpcomingEventDetails() {
  return (
    <>
      <NavBar />
      <div className="container-fluid laptop-margin">
        {/* Banner Section */}
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white z-2">Upcoming Event</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
            Home
          </Link>
        </div>

        {/* Event Details Section */}
        <div className="container mt-5">
          <div className="row d-flex align-items-center">
            {/* Event Image */}
            <div className="col-md-5">
              <img
                src={img1}
                className="img-fluid"
                alt="Three Days Meditation"
                // style={{ borderRadius: "8px" }}
              />
            </div>

            {/* Event Details */}
            <div className="col-md-7">
              <h2 className="fw-bold">THREE DAYS MEDITATION</h2>
              <p className="fs-5">
                <strong>Price: ₹ 999.00</strong>
              </p>
              <p> <strong>Teacher : </strong>BY VIVEKADITYA JI</p>
              <p> <strong>Duration : </strong>Friday - Sunday</p>
              <p> <strong>Morning :</strong>Morning: 6 - 7 And 7 - 8</p>
              <p> <strong>Ecening :</strong>Evening: 5 - 6 And 6 - 7</p>
              <p> <strong>Timezone :</strong>( Indian Time Zone ), 22 November 2020</p>
              <p><strong>Description:</strong>
                Three days meditation sessions are powerful sessions for mind
                peace and full-body relaxation. This session will be conducted
                by Gurushree Acharya Vivekaditya Ji, a Spiritual Guru and
                philosopher.
              </p>

              {/* Quantity Selector & Add to Cart Button */}
              <div className="d-flex align-items-center">
                <label className="fw-bold me-2">Qty:</label>
                <button className="btn btn-light border">-</button>
                <span className="mx-2">1</span>
                <button className="btn btn-light border">+</button>
              </div>

              <button className="btn btn-primary mt-3 mb-3">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpcomingEventDetails;
