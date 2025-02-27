import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'
import {Link} from 'react-router-dom'

function Our_centers() {
  return (
    <>
    <NavBar />
    <div className='container-fluid laptop-margin '>
    <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" > Our Centers</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
        <div className="container my-5">
        <div className="row justify-content-center">
          {/* Center Cards */}
          {[
            { id: '001', location: 'Rajendra Nagar, Ghaziabad, Uttar Pradesh' },
            { id: '002', location: 'Baghpat, Uttar Pradesh' },
            { id: '003', location: 'Lucknow, Uttar Pradesh' },
            { id: '004', location: 'Delhi' },
            { id: '005', location: 'Faridabad' },
          ].map((center, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center p-3 border ">
                <h5 className="fw-bold"><i className="bi bi-building"></i> Pavitram {center.id}</h5>
                <p><i className="bi bi-geo-alt"></i> {center.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expansion Message */}
      <div className="text-center py-4 bg-light">
        <h4>
          We are in the process of expanding our centers throughout the length and breadth of the country and abroad.
        </h4>
      </div>
 
    
    </div>
    <Footer />
</>
  )
}

export default Our_centers