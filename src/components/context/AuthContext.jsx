/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Register a new user
    const register = async (userData) => {
        setLoading(true);
        try {
            console.log('Registering user:', userData);
            setCurrentUser(userData);
            setIsLoggedIn(true);
            setError('');
            return true;
        } catch (error) {
            setError('Failed to register user');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Login user
    const login = async (email, password) => {
        setLoading(true);
        try {
            console.log('Logging in user:', { email, password });
            setCurrentUser({ email });
            setIsLoggedIn(true);
            setError('');
            return true;
        } catch (error) {
            setError('Failed to login');
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Logout user
    const logout = () => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        toast.error("Logout successful!", { duration: 3000 });
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
    const updateUser = async (userData) => {
        setLoading(true);
        try {
            console.log('Updating user profile:', userData);
            if (userData.profileImage) {
                console.log('Profile image received for update');
            }
            setCurrentUser(prevUser => ({
                ...prevUser,
                ...userData
            }));
            toast.success('Profile updated successfully!');
            setError('');
            return true;
        } catch (error) {
            setError('Failed to update profile');
            toast.error('Failed to update profile');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        currentUser,
        loading,
        error,
        isLoggedIn,
        setIsLoggedIn,
        register,
        login,
        logout,
        submitContactForm,
        resetPassword,
        updateUser
    };

    return (
        <AuthContext.Provider value={value}>
            <Toaster />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

