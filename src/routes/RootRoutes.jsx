import { Route, Routes } from 'react-router-dom';
import Login from '../components/common/Login';
import LandingPage from '../components/Home/LandingPage';
import PageNotFound from '../components/Home/PageNotFound';
import Registration from '../components/common/Registration';
import Aboutus from '../components/pages/Aboutus';
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
import UpcomingEventDetails from '../components/pages/UpcomingEventDetails';
import HomeClasses from '../components/pages/HomeClasses';
import HomeclassDetails from '../components/pages/Homeclass_details';
import BlogDetails from '../components/pages/BlogDetails';
import DashboardRoutes from '../components/dashboard/dashboardRoutes';
// import AdminLogin from '../../Admin/login/AdminLogin';
import AdminRoutes from '../../Admin/routes/Routes';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home/login" element={<Login />} />
      <Route path="home/homeclasses" element={<HomeClasses />} />
      <Route path="/home/homeclass_details/:classId" element={<HomeclassDetails />} />
      <Route path="/home/registration" element={<Registration />} />
      <Route path="/home/aboutus" element={<Aboutus />} />
      <Route path='/home/Acharya_VivekAditya' element={<Acharya_VivekAditya />} />
      <Route path="/home/our_centers" element={<Our_centers />} />
      <Route path="/home/Courses" element={<Courses />} />
      <Route path='/home/course_details/:courseId' element={<CourseDetails />} />
      <Route path="/home/service" element={<Services />} />
      <Route path='/home/upcoming_events' element={<UpComingEvent />} />
      <Route path="/home/upcoming_events_details/:eventId" element={<UpcomingEventDetails />} />
      <Route path="/home/contactus" element={<ContactUs />} />
      <Route path="/home/gallery" element={<Galllery />} />
      <Route path='/home/cart' element={<Cart />} />
      <Route path="/home/blogdetail" element={<BlogDetails />} />
      <Route path="/home/blogdetail/:blogId" element={<BlogDetails />} />
      <Route path="/Home/forget_password" element={<ForgetPassword />} />
      <Route path="/home/service_detail" element={<ServiceDetails />} />
      <Route path="/home/service_detail/:serviceId" element={<ServiceDetails />} />
      <Route path="/user/*" element={<DashboardRoutes />} />

      {/* admin routes */}
      {/* <Route path="/home/admin_login" element={<AdminLogin />} /> */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RootRoutes;
