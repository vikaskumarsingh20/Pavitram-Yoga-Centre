import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Siderbar';
import './dashboard.css';

const Dashboard = () => {
const [isSidebarVisible, setIsSidebarVisible] = useState(false);

const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
};

return (
    <div className="dashboard-container">
    <Header toggleSidebar={toggleSidebar} />
    <div className="dashboard-content">
        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className={`sidebar-overlay ${isSidebarVisible ? 'visible' : ''}`} onClick={toggleSidebar}></div>
        <main className="dashboard-main">
        <Outlet />

        </main>
    </div>
    </div>
);
};

export default Dashboard;

