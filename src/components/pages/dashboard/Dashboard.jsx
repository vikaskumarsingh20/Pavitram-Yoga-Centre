import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Siderbar';
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

