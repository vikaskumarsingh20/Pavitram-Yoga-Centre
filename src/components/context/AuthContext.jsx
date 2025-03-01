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

// Register a new user
const register = async (userData) => {
    setLoading(true);
    try {
    // This is where you would typically make an API call to register the user
    console.log('Registering user:', userData);
    // Simulate successful registration
    setCurrentUser(userData);
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
    // This is where you would typically make an API call to authenticate the user
    console.log('Logging in user:', { email, password });
    // Simulate successful login
    setCurrentUser({ email });
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
    // This is where you would typically make an API call to logout the user
    setCurrentUser(null);
    toast.error("Logout successful!", { duration: 3000 });
};

// Submit contact form
const submitContactForm = async (contactData) => {
    setLoading(true);
    try {
        // This is where you would typically make an API call to submit the contact form
        console.log('Contact form submission:', contactData);
        // Simulate successful submission
        setError('');
        return true;
    } catch (error) {
        setError('Failed to submit contact form');
        return false;
    } finally {
        setLoading(false);
    }
};

const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
    submitContactForm
};

return (
    <AuthContext.Provider value={value}>
    <Toaster/>
    {children}
    </AuthContext.Provider>
);
};

export default AuthContext;

