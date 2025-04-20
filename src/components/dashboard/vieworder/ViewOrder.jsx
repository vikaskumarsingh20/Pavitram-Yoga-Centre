import { Link } from 'react-router-dom';
import './vieworder.css';
import "../dashboard.css";
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

function ViewOrder() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;
  
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser?._id) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/payment/orders/${currentUser._id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        // Transform orders data to ensure title is available
        const transformedOrders = data.orders.map(order => ({
          ...order,
          cartItems: order.cartItems.map(item => ({
            ...item,
            title: item.title || item.name || item.serviceName || 'Service' // Fallback options
          }))
        }));
        setOrders(transformedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser]);

  // Pagination logic
  const indexOfLastOrder = currentPage * pageSize;
  const indexOfFirstOrder = indexOfLastOrder - pageSize;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  
  const handleNextPage = () => {
    if (currentPage < Math.ceil(orders.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showingFrom = orders.length === 0 ? 0 : indexOfFirstOrder + 1;
  const showingTo = Math.min(indexOfLastOrder, orders.length);
  const totalEntries = orders.length;

  return (
    <div className="container-fluid">
      <h2 className="account-title">View Order</h2>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light py-2 px-3 rounded-3">
          <li className="breadcrumb-item">
            <i className="bi bi-house-door-fill me-2"></i>
            <Link to="/user">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">View-Order</li>
        </ol>
      </nav>

      <div className="card shadow-lg mt-4">
        <div className="card-header bg-primary1 text-white">
          <h5 className="mb-0">
            <i className="bi bi-eye me-2"></i> Order History
          </h5>
        </div>
        <div className="card-body">
          <div className="table-responsive text-nowrap">
            <table className="table table-bordered table-striped">
              <thead className="table-light">
                <tr>
                  <th style={{width: "12%"}}>Order ID</th>
                  <th style={{width: "15%"}}>Date</th>
                  <th style={{width: "15%"}}>Title Name</th>
                  <th style={{width: "12%"}}>Amount</th>
                  <th style={{width: "15%"}}>Payment ID</th>
                  <th style={{width: "18%"}}>Status</th>
                  <th>Items</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="7" className="text-center">Loading orders...</td></tr>
                ) : currentOrders.length === 0 ? (
                  <tr><td colSpan="7" className="text-center">No orders found</td></tr>
                ) : (
                  currentOrders.map((order) => (
                    <tr key={order.orderId}>
                      <td className="align-middle">
                        <span className="text-primary fw-medium">{order.orderId}</span>
                      </td>
                      <td className="align-middle">
                        {new Date(order.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="align-middle">
                        <span className=" px-2 py-1 position-relative top-0">
                          {order.cartItems[0]?.title || 'N/A'}
                        </span>
                      </td>
                      <td className="align-middle fw-bold">₹{Number(order.amount).toFixed(2)}</td>
                      <td className="align-middle">
                        {order.paymentId ? 
                          <span className="text-success">{order.paymentId}</span> : 
                          <span className="text-muted">Pending</span>
                        }
                      </td>
                      <td className="align-middle ">
                        <span className={`badge rounded-pill position-relative ${
                          order.status === 'completed' ? 'bg-success' : 
                          order.status === 'failed' ? 'bg-danger' : 
                          'bg-warning'
                        } px-3 py-2`}>
                          <i className={`bi ${
                            order.status === 'completed' ? 'bi-check-circle' : 
                            order.status === 'failed' ? 'bi-x-circle' : 
                            'bi-hourglass-split'
                          } me-1`}></i>
                          {order.status === 'completed' ? 'Payment Successful' :
                           order.status === 'failed' ? 'Payment Failed' :
                           'Payment Pending'}
                        </span>
                      </td>
                      <td className="align-middle">
                        {order.cartItems.map((item, index) => (
                          <div key={index} className="d-flex align-items-center mb-1">
                           
                            {/* <span className="text-truncate" style={{maxWidth: '150px'}}>
                              {item.title}
                            </span> */}
                            <span className="ms-auto text-muted small">
                              ₹{Number(item.price).toFixed(2)}
                            </span>
                            <span className="badge bg-light text-dark me-2 position-relative ms-2 top-0">
                              x{item.quantity}
                            </span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
            <span className="me-2">
              Showing {showingFrom} to {showingTo} of {totalEntries} entries
            </span>
            <div className="pagination-buttons">
              <button 
                className="btn btn-outline-secondary btn-sm me-2"
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
  );
}

export default ViewOrder;