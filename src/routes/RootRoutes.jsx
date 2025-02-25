import { Route, Routes } from 'react-router-dom';
import Login from '../components/common/Login';
import LandingPage from '../components/Home/LandingPage';
import PageNotFound from '../components/Home/PageNotFound';
import Registration from '../components/common/Registration';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home/login" element={<Login />} />
      <Route path="/home/registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default RootRoutes;
