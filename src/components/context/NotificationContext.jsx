/* eslint-disable react/prop-types */
import  { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export const NotificationProvider = ({ children }) => {
  // State for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Welcome to Pavitra Yoga! Get started with your first class.",
      time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: false,
      link: "/dashboard",
      type: "info"
    },
    {
      id: 2,
      message: "New class schedule available for this week.",
      time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      read: false,
      link: "/classes",
      type: "info"
    },
    {
      id: 3,
      message: "Your order #102 has been completed successfully!",
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      read: false,
      link: "/dashboard/vieworder",
      type: "success"
    },
    {
      id: 4,
      message: "Don't miss our upcoming yoga retreat this weekend!",
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      read: true,
      link: "/events",
      type: "warning"
    },
    {
      id: 5,
      message: "A new article on meditation has been published.",
      time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      read: true,
      link: "/blog",
      type: "info"
    }
  ]);

  // Calculate unread notification count
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const count = notifications.filter(notification => !notification.read).length;
    setUnreadCount(count);
  }, [notifications]);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id 
          ? { ...notification, read: true } 
          : notification
      )
    );
  };

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, read: true }))
    );
  };

  // Function to add a new notification
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(), // Simple unique ID generation
      time: new Date(),
      read: false,
      ...notification
    };
    
    setNotifications([newNotification, ...notifications]);
  };

  // Function to remove a notification
  const removeNotification = (id) => {
    setNotifications(
      notifications.filter(notification => notification.id !== id)
    );
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Format timestamp to readable string
  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    
    // Less than a minute
    if (diff < 60 * 1000) {
      return 'Just now';
    }
    
    // Less than an hour
    if (diff < 60 * 60 * 1000) {
      const minutes = Math.floor(diff / (60 * 1000));
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
    
    // Less than a day
    if (diff < 24 * 60 * 60 * 1000) {
      const hours = Math.floor(diff / (60 * 60 * 1000));
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    
    // Less than a week
    if (diff < 7 * 24 * 60 * 60 * 1000) {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
    
    // Default: format as date
    return timestamp.toLocaleDateString();
  };

  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification,
    removeNotification,
    clearAllNotifications,
    formatTime
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

