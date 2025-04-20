import { Route, Routes } from 'react-router-dom';
import AccountInfo from './account/AccountInfo';
import Dashboard from './Dashboard';
import Profile from './profile/Profile';
import Forget from './forgetpassword/Forget';
import ViewOrder from './vieworder/ViewOrder';
import LiveClass from './liveclasses/LiveClass';
import Help from './help/Help';
import UpdateProfile from './updateprofile/UpdateProfile';
 

const DashboardRoutes = () => {
return (
    <Routes>
    <Route path="/" element={<Dashboard />}>
        <Route index element={<AccountInfo />} />
        <Route path="account-info" element={<AccountInfo />} />
        <Route path="profile" element={<Profile />} />
        <Route path="change-password" element={<Forget/>} />
        <Route path="orders" element={<ViewOrder/>} />
        <Route path="live-classes" element={<LiveClass/>} />
        <Route path="help" element={<Help/>} />
        <Route path="update_profile" element={<UpdateProfile/>} />
    </Route>
    </Routes>
);
};

export default DashboardRoutes;
