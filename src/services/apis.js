const BASE_URL = import.meta.env.VITE_BASE_URL;

export const updateProfile = async (userId, userData) => {
    try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        // Validate token exists
        if (!token) {
            throw new Error('Please login again to continue');
        }

        // Make the API call
        const response = await fetch(`${BASE_URL}/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include', // Include cookies
            body: JSON.stringify(userData)
        });

        // Parse response
        const data = await response.json();

        // Handle non-200 responses
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Please login again to continue');
            }
            throw new Error(data.message || 'Failed to update profile');
        }

        return data;
    } catch (error) {
        console.error('Update profile error:', error);
        throw error;
    }
};