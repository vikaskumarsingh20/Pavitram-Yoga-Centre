// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'

function Cart() {
const { cart, total, removeFromCart, clearCart } = useCart();
  return (
    <>
      <NavBar />

      <div className="container-fluid laptop-margin">
      <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >  Cart Details</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
      </div>

      <div className="container mt-4 table-responsive text-nowrap">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
        <tbody>
        {cart.length === 0 ? (
            <tr>
            <td colSpan="6">Cart is empty!</td>
            </tr>
        ) : (
            cart.map((item, index) => (
            <tr key={index}>
                <td>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px' }} className="img-thumbnail" />
                </td>
                <td>
                <h5>{item.name}</h5>
                <p className="small text-muted mb-0">Duration: {item.duration}</p>
                <p className="small text-muted mb-0">Time: {item.time}</p>
                <p className="small text-muted mb-0">Period: {item.sessionPeriod}</p>
                </td>
                <td>{item.sessionType}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}.00</td>
                <td>
                <div className="d-flex flex-column align-items-center">
                    <span className="mb-2">₹{item.price * item.quantity}.00</span>
                    <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(index)}
                    >
                    <i className="fa fa-trash"></i> Remove
                    </button>
                </div>
                </td>
            </tr>
            ))
        )}
        </tbody>
        </table>
    </div>

    {cart.length > 0 && (
    <div className="container mb-5">
        <div className="row">
        <div className="col-md-6">
            <button 
            className="btn btn-outline-danger mt-3 mb-3"
            onClick={() => clearCart()}
            >
            Clear Cart
            </button>
        </div>
        <div className="col-md-6">
            <div className="card">
            <div className="card-body">
                <h4 className="card-title">Cart Summary</h4>
                <div className="d-flex justify-content-between">
                <span>Total Items:</span>
                <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                <span>Total Amount:</span>
                <span>₹{total}.00</span>
                </div>
                <button className="btn btn-primary w-100 mt-3">
                Proceed to Checkout
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )}

      <Footer />
    </>
  )
}

export default Cart