import { Link } from 'react-router-dom'
import './ViewOrder.css'
import "../dashboard.css"
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

function ViewOrder() {
  // State for storing orders and pagination
  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  
  // Get user details from auth context
  const { currentUser } = useAuth()
  
  // Generate mock order data
  useEffect(() => {
    const generateMockOrders = () => {
      // Default values if user is not logged in
      const name = currentUser?.fullName || 'Guest User'
      const email = currentUser?.email || 'guest@example.com'
      const phone = currentUser?.phone || '123-456-7890'
      const address = currentUser?.address || 'Default Address'
      
      const mockOrders = []
      
      // Generate 25 mock orders
      for (let i = 1; i <= 25; i++) {
        const date = new Date()
        date.setDate(date.getDate() - Math.floor(Math.random() * 30)) // Random date within last 30 days
        
        mockOrders.push({
          id: i,
          name: name,
          email: email,
          phone: phone,
          address: address,
          totalPrice: (Math.random() * 1000 + 100).toFixed(2), // Random price between 100 and 1100
          payment: Math.random() > 0.5 ? 'Completed' : 'Pending', // Random payment status
          createdOn: date.toLocaleString()
        })
      }
      
      setOrders(mockOrders)
    }
    
    generateMockOrders()
  }, [currentUser])
  
  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < Math.ceil(orders.length / pageSize)) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  // Get current page's orders
  const indexOfLastOrder = currentPage * pageSize
  const indexOfFirstOrder = indexOfLastOrder - pageSize
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)
  
  // Calculate showing entries text
  const showingFrom = orders.length === 0 ? 0 : indexOfFirstOrder + 1
  const showingTo = Math.min(indexOfLastOrder, orders.length)
  const totalEntries = orders.length
  return (
    <div className="container-fluid">
      <h2 className="account-title"> View Order</h2>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            View-Order
          </li>
        </ol>
      </nav>
      <div className="mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary1 text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <i className="bi bi-eye me-2"></i> View Order
          </h5>
          {/* <button className="btn btn-light btn-sm">×</button> */}
        </div>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th>SNo.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Total Price</th>
                  <th>Payment</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No data available in table
                    </td>
                  </tr>
                ) : (
                  currentOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.phone}</td>
                      <td>{order.address}</td>
                      <td>₹{order.totalPrice}</td>
                      <td>
                        <span className={`badge ${order.payment === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                          {order.payment}
                        </span>
                      </td>
                      <td>{order.createdOn}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
            <span className="me-2 me-sm-3">Showing {showingFrom} to {showingTo} of {totalEntries} entries</span>
            <div className="d-flex">
              <button 
                className="btn btn-outline-secondary btn-sm me-2 me-sm-3"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={handleNextPage}
                disabled={currentPage >= Math.ceil(orders.length / pageSize)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ViewOrder