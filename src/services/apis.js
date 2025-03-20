export const updateProfile = async (userId, formData) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData, // FormData will set the correct content-type
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update profile');
        }

        return data;
    } catch (error) {
        console.error('Update profile error:', error);
        throw error;
    }
};