const User = require('../models/user');
const path = require('path');

exports.updateUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = { ...req.body };

        // Handle file upload
        if (req.file) {
            const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
            updateData.profileImage = fileUrl;
        }

        // Convert gender to lowercase for consistency
        if (updateData.gender) {
            updateData.gender = updateData.gender.toLowerCase();
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: updatedUser
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to update user details"
        });
    }
};

// Get user details
exports.getUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Remove sensitive information
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            user: userResponse
        });

    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            message: "Error fetching user details",
            error: error.message
        });
    }
};