// eslint-disable-next-line no-unused-vars
import React from 'react'
import Carousels from './Carousel'
import LatestServices from './LatestServices'
import LatestCourses from './LatestCourses'
import UpcomingEvent from './UpcomingEvent'
import Testimonial from './Testimonial'
import OurBlogs from './OurBlogs'
import OurGallery from './OurGallery'
import Footer from './FooterCopyright'
import OurInstructors from './OurInstractor'
import NavBar from '../common/NavBar'

function LandingPage() {
  return (
    <>
    <NavBar />
    <Carousels />
    <LatestServices />
    <LatestCourses />
    <UpcomingEvent />
    <OurInstructors />
    <Testimonial />
    <OurBlogs />
    <OurGallery />
    <Footer />
  </>
  )
}

export default LandingPage