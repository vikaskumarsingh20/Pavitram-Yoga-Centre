const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchDashboardData = async () => {
    try {
        if (!localStorage.getItem('adminToken')) {
            throw new Error('No authentication token found');
        }

        const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 401) {
            throw new Error('Authentication expired or invalid');
        }

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        if (error.message === 'Failed to fetch') {
            console.error('Network error: Unable to connect to the server');
            throw new Error('Network error: Please check your internet connection');
        }
        console.error('Dashboard data fetch error:', error);
        throw error;
    }
};
