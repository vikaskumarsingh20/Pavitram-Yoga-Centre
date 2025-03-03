// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import{blogs} from '../data/blogs'

function OurBlogs() {


    return (
        <div className="container-fluid mt-4 mb-5 ">
            <p className="border border-3 border-dark bg-light"></p>
            <h2 className="text-center mb-3 mt-3">
                Our <span className="text-danger">Blogs</span></h2>

            <div className="row row-cols-1 row-cols-md-4 g-2 mx-auto px-md-5">
                {blogs.map((blog) => (
                    <div key={blog.id} className="col">
                        <div className="card h-100">
                            <img src={blog.img} className="card-img-top" alt={blog.title} />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title.length > 40 ? `${blog.title.slice(0, 40)}...` : blog.title}</h5>
                                <p className="card-text"><i className="fa-solid fa-calendar-days text-danger"></i>{blog.date}</p>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/home/blogdetail/${blog.id}`} className="btn btn-danger">{blog.button}<i className="fa fa-angle-double-right ms-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* subscribe btn */}
            <div className="footer-newsletter  mt-3 py-5 rounded ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className='text-white'>OUR NEWSLETTER</h4>

                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlogs