import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Siderbar';
import './dashboard.css';

const Dashboard = () => {
return (
    <div className="dashboard-container">
    <Header />
    <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
        <Outlet />

        </main>
    </div>
    </div>
);
};

export default Dashboard;

