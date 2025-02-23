import { Route, Routes } from 'react-router-dom';
import Login from '../components/common/Login';
import LandingPage from '../components/Home/LandingPage';
import PageNotFound from '../components/Home/PageNotFound';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  );
}

export default RootRoutes;
