/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (userData, token) => {
        try {
            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('token', token);
            setCurrentUser(userData);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    // Check for existing auth on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('currentUser');
        
        if (token && user) {
            try {
                setCurrentUser(JSON.parse(user));
                setIsLoggedIn(true);
            } catch (error) {
                console.error('Auth restoration error:', error);
                // Clear invalid data
                localStorage.removeItem('token');
                localStorage.removeItem('currentUser');
            }
        }
        setLoading(false);
    }, []);

    // Register a new user
    const register = async (userData) => {
        setLoading(true);
        try {
            console.log('Registering user:', userData);
            setCurrentUser(userData);
            setIsLoggedIn(true);
            localStorage.setItem("currentUser", JSON.stringify(userData));
            setError('');
            return true;
        } catch (error) {
            setError('Failed to register user');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Logout user
    const logout = () => {
        setCurrentUser(null);
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem("currentUser");
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        toast.success("Logout successful!", { duration: 3000 });
    };

    // Submit contact form
    const submitContactForm = async (contactData) => {
        setLoading(true);
        try {
            console.log('Contact form submission:', contactData);
            setError('');
            return true;
        } catch (error) {
            setError('Failed to submit contact form');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Reset password
    const resetPassword = async (oldPassword, newPassword) => {
        setLoading(true);
        try {
            console.log('Resetting password:', { oldPassword, newPassword });
            if (oldPassword === 'wrongpassword') {
                setError('Old password is incorrect');
                toast.error('Old password is incorrect');
                return false;
            }
            console.log('Password updated successfully');
            toast.success('Password has been reset successfully');
            setError('');
            return true;
        } catch (error) {
            setError('Failed to reset password');
            toast.error('Failed to reset password');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Update user profile
    const updateUser = (userData) => {
        const updatedUser = {
            ...currentUser,
            ...userData,
            gender: userData.gender || currentUser?.gender,
            country: userData.country || currentUser?.country,
            state: userData.state || currentUser?.state,
            city: userData.city || currentUser?.city,
            _id: userData._id || currentUser?._id // Ensure ID is preserved
        };
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    };

    const value = {
        currentUser,
        token,
        loading,
        setLoading,
        error,
        isLoggedIn,
        setIsLoggedIn,
        setCurrentUser,
        register,
        login,
        logout,
        submitContactForm,
        resetPassword,
        updateUser
    };
    console.log("Current User in Context:", currentUser); // Debug log
    
    return (
        <AuthContext.Provider value={value}>
            <Toaster />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

