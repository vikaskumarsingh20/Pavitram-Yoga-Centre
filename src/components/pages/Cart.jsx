// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'

function Cart() {
  return (
    <>
      <NavBar />

      <div className="container-fluid laptop-margin">
        <div 
          className="d-flex flex-column align-items-center justify-content-center py-5 text-white"
          style={{ backgroundColor: "rgb(42, 23, 111)" }} 
        >
          <h1 className="text-center">ADD TO CART</h1>
          <div>
            <Link to="/" className="btn btn-link text-white text-decoration-none">Home</Link>
            <span> • </span>
            <Link to="/home/cart" className="btn btn-link text-white text-decoration-none">Add to Cart</Link>
          </div>
        </div>
      </div>

      <div className="container mt-4">
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
            <tr>
              <td colSpan="6">Cart is empty!</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  )
}

export default Cart