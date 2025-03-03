// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../data/blogs'

function BlogDetails() {
    const { blogId } = useParams();  
    const blog = blogs.find((b) => b.id.toString() === blogId);  

    return (
        <>
            <NavBar />
            <div className='container-fluid laptop-margin '>
                <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
                    <h1 className="text-center text-white z-2" > Blog Detail</h1>
                    <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                        Home
                    </Link>
                </div>

                <div className="container py-2">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <img
                                src={blog.img}
                                alt="Yoga Session"
                                className="img-fluid w-100 rounded"
                                style={{ height: "400px" }}

                            />
                            <h2 className="mt-4 fw-bold">{blog.title}</h2>
                            <p className="text-muted">
                                <i className="bi bi-calendar-event"></i> {blog.date}
                            </p>
                            <p>{blog.description}</p>
                            <p className='border border-2'></p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default BlogDetails
