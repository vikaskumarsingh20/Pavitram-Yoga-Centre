const User = require('../models/user');
const path = require('path');
const fs = require('fs');
const { deleteUserImage } = require('../middleware/fileUpload');

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

        // Get the current user to check for previous profile image
        const currentUser = await User.findById(userId);
        if (!currentUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Handle file upload
        if (req.file) {
            console.log('File uploaded:', req.file.filename);
            
            // Create file URL
            const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
            updateData.profileImage = fileUrl;
            
            // Delete previous profile image if it exists
            if (currentUser.profileImage) {
                console.log('Attempting to delete previous profile image:', currentUser.profileImage);
                const deleted = deleteUserImage(currentUser.profileImage);
                if (deleted) {
                    console.log('Successfully deleted previous profile image');
                } else {
                    console.log('Previous profile image not found or could not be deleted');
                }
            }
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
        
        // More detailed error logging based on error type
        if (error.name === 'ValidationError') {
            console.error('Validation error:', error.errors);
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: Object.values(error.errors).map(e => e.message)
            });
        } else if (error.name === 'CastError') {
            console.error('Invalid ID format:', error);
            return res.status(400).json({
                success: false,
                message: "Invalid user ID format"
            });
        } else if (error.code === 11000) {
            console.error('Duplicate key error:', error);
            return res.status(400).json({
                success: false,
                message: "Duplicate field value entered"
            });
        }
        
        res.status(500).json({
            success: false,
            message: error.message || "Failed to update user details",
            error: process.env.NODE_ENV === 'development' ? error.stack : undefined
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