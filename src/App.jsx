import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import RootRoutes from './routes/RootRoutes';
import Carousels from './components/Home/Carousel';
import LatestServices from './components/Home/LatestServices';
import LatestCourses from './components/Home/LatestCourses';
import UpcomingEvent from './components/Home/UpcomingEvent';
import OurInstractor from './components/Home/OurInstractor';
import Testimonial from './components/Home/Testimonial';
import OurBlogs from './components/Home/OurBlogs';
import OurGallery from './components/Home/OurGallery';
import Footer from './components/Home/FooterCopyright';
function App() {

  return (
    <>
    <Router>
      <RootRoutes/> 
    </Router> 

    <Carousels/>
    <LatestServices/>
    <LatestCourses/>
    <UpcomingEvent/>
    <OurInstractor/>
    <Testimonial/>
    <OurBlogs/>
    <OurGallery/>
    <Footer/>
    </>
  )
}

export default App
