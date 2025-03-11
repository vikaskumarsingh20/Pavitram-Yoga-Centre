/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext, useEffect } from 'react';
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


    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            setCurrentUser(storedUser);
            setIsLoggedIn(true);
        }
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

    // Login user
    const login = async (userData) => {
        setLoading(true);
        try {
            console.log('Logging in user:', {  email: userData.email });
            setCurrentUser(userData);  // <-- Ensure you are saving user data here
            setIsLoggedIn(true);
            localStorage.setItem("currentUser", JSON.stringify(userData));
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
        localStorage.removeItem("currentUser");
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

