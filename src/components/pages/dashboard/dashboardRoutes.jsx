import { Route, Routes } from 'react-router-dom';
import AccountInfo from './AccountInfo';
import Dashboard from './Dashboard';
import Profile from './Profile';
// TODO: Create and import these components
// import ChangePassword from './ChangePassword';
// import Orders from './Orders';
// import LiveClasses from './LiveClasses';
const DashboardRoutes = () => {
return (
    <Routes>
    <Route path="/" element={<Dashboard />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account-info" element={<AccountInfo />} />
        {/* TODO: Create these components */}
        <Route path="change-password" element={<h1>Change Password (Component to be created)</h1>} />
        <Route path="orders" element={<h1>Orders (Component to be created)</h1>} />
        <Route path="live-classes" element={<h1>Live Classes (Component to be created)</h1>} />
    </Route>
    </Routes>
);
};

export default DashboardRoutes;
