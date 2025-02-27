import { Route, Routes } from 'react-router-dom';
import Login from '../components/common/Login';
import LandingPage from '../components/Home/LandingPage';
import PageNotFound from '../components/Home/PageNotFound';
import Registration from '../components/common/Registration';
import Aboutus from '../components/pages/aboutus';
import Acharya_VivekAditya from '../components/pages/Acharya_VivekAditya';
import Our_centers from '../components/pages/Our_centers';
import Courses from '../components/pages/Courses';
import Services from '../components/pages/Services';
import UpComingEvent from '../components/pages/UpComingEvent';
import ContactUs from '../components/pages/ContactUs';
import Galllery from '../components/pages/Galllery';
import Cart from '../components/pages/Cart';
import ForgetPassword from '../components/Home/ForgetPassword';
import ServiceDetails from '../components/pages/ServiceDetails';
import CourseDetails from '../components/pages/CourseDetails';

function RootRoutes() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/home/login" element={<Login />} />
      <Route path="/home/registration" element={<Registration />} />
      <Route path="/home/aboutus" element={<Aboutus />} />
      <Route path='/home/Acharya_VivekAditya' element={<Acharya_VivekAditya />} />
      <Route path="/home/our_centers" element={<Our_centers />} />
      <Route path="/home/Courses" element={<Courses />} />
    <Route path='/home/course_details/:courseId' element={<CourseDetails />} />
      <Route path="/home/service" element={<Services />} />
      <Route path='/home/upcoming_events' element={<UpComingEvent/>} />
      <Route path="/home/contactus" element={<ContactUs/>} />
      <Route path="/home/gallery" element={<Galllery/>} />
      <Route path='/home/cart' element={<Cart/>} /> 
      <Route path="/Home/forget_password" element={<ForgetPassword/>} />
      <Route path="/home/service_detail" element={<ServiceDetails/>} />
      <Route path="/home/service_detail/:serviceId" element={<ServiceDetails/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default RootRoutes;
