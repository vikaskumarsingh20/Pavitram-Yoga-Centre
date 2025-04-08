const User = require('../models/User');
const Booking = require('../models/Booking');

const getDashboardData = async (req, res) => {
    try {
        const userCount = await User.countDocuments({ role: 'user' });
        const totalBookings = await Booking.countDocuments();
        const recentBookings = await Booking.find()
            .populate('userId', 'name email')
            .sort({ createdAt: -1 })
            .limit(5);
        
        const revenue = await Booking.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$amount" }
                }
            }
        ]);

        res.status(200).json({
            userCount,
            totalBookings,
            recentBookings,
            totalRevenue: revenue[0]?.total || 0
        });
    } catch (error) {
        console.error('Dashboard data error:', error);
        res.status(500).json({ message: 'Error fetching dashboard data' });
    }
};

module.exports = {
    getDashboardData
};
