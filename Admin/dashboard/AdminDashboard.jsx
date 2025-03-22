import { useState, useEffect } from 'react';
import { FaUsers, FaUserCheck, FaShoppingCart, FaCalendarCheck } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AdminDashboard.css';

function AdminDashboard() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeUsers: 0,
        totalOrders: 0,
        completedOrders: 0,
        recentTransactions: []
    });

    useEffect(() => {
        // Fetch dashboard data
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT/admin/dashboard', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            const data = await response.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    const StatCard = ({ icon: Icon, title, value, color }) => (
        <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${color}20`, color }}>
                <Icon />
            </div>
            <div className="stat-info">
                <h3>{value}</h3>
                <p>{title}</p>
            </div>
            <div className="stat-progress">
                <div 
                    className="progress-bar" 
                    style={{ 
                        width: `${(value / 100) * 100}%`,
                        backgroundColor: color 
                    }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back, Admin</p>
            </div>

            <div className="stats-grid">
                <StatCard 
                    icon={FaUsers}
                    title="Total Users"
                    value={stats.totalUsers}
                    color="#4361ee"
                />
                <StatCard 
                    icon={FaUserCheck}
                    title="Active Users"
                    value={stats.activeUsers}
                    color="#2ec4b6"
                />
                <StatCard 
                    icon={FaShoppingCart}
                    title="Total Orders"
                    value={stats.totalOrders}
                    color="#ff6b6b"
                />
                <StatCard 
                    icon={FaCalendarCheck}
                    title="Completed Orders"
                    value={stats.completedOrders}
                    color="#f72585"
                />
            </div>

            <div className="charts-section">
                <div className="chart-container">
                    <h2>User Activity</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={stats.recentTransactions}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#4361ee" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="recent-activity">
                <h2>Recent Transactions</h2>
                <div className="activity-list">
                    {stats.recentTransactions.map((transaction, index) => (
                        <div key={index} className="activity-item">
                            <div className="activity-info">
                                <h4>{transaction.user}</h4>
                                <p>{transaction.type}</p>
                            </div>
                            <div className="activity-amount">
                                ₹{transaction.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;