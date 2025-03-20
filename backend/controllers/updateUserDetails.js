const User = require('../models/user');
const path = require('path');

exports.updateUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log('Updating user with ID:', userId);
        
        // Validate userId
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required"
            });
        }
        
        const updateData = { ...req.body };
        console.log('Update data received:', updateData);

        // Handle file upload
        if (req.file) {
            console.log('File uploaded:', req.file.filename);
            const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
            updateData.profileImage = fileUrl;
        } else {
            console.log('No file uploaded');
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
            console.log('User not found with ID:', userId);
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        console.log('User updated successfully:', updatedUser._id);

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