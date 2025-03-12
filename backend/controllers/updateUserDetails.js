const User = require('../models/user');

exports.updateUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        // Validate user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Fields that are allowed to be updated
        const allowedUpdates = [
            'fullName',
            'phone',
            'email',
            'address',
            'gender',
            'Country',
            'State'
        ];

        // Filter out any fields that aren't in allowedUpdates
        const filteredData = Object.keys(updateData)
            .filter(key => allowedUpdates.includes(key))
            .reduce((obj, key) => {
                obj[key] = updateData[key];
                return obj;
            }, {});

        // If email is being updated, check if it's already in use
        if (filteredData.email && filteredData.email !== user.email) {
            const emailExists = await User.findOne({ email: filteredData.email });
            if (emailExists) {
                return res.status(400).json({
                    success: false,
                    message: "Email already in use"
                });
            }
        }

        // Update user details
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: filteredData },
            { new: true, runValidators: true }
        );

        // Remove sensitive information
        const userResponse = updatedUser.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            message: "User details updated successfully",
            user: userResponse
        });

    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({
            success: false,
            message: "Error updating user details",
            error: error.message
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