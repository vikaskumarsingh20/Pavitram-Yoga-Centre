# 🧘‍♂️ Pavitram Yoga Centre

Welcome to the Pavitram Yoga Centre project! This application is designed to help users find peace and balance through yoga. Built with a robust tech stack, it ensures a seamless experience for all users.

## 🌟 Project Overview
<details>
<summary>Click to expand</summary>

The Pavitram Yoga Centre application is a full-stack web application using React for the frontend, Node.js for the backend, and MongoDB for the database. It offers a range of features to support yoga practitioners and enthusiasts.

</details>

## 🚀 Features
- User authentication and profile management
- Booking classes
- Viewing class schedules
- Tracking progress and milestones
- Community forum for discussions

## 🛠️ Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/pavitram-yoga-centre.git
```

### 2. Navigate to the project directory
```bash
cd pavitram-yoga-centre
```

### 3. Install dependencies for the frontend and backend
```bash
cd client
npm install
cd ../server
npm install
```

### 4. Set up MongoDB
Ensure MongoDB is installed and running on your machine. You can download it from [here](https://www.mongodb.com/try/download/community).

## 🎮 Usage Instructions

Start the development server:

### 1. Frontend
```bash
cd client
npm start
```

### 2. Backend
```bash
cd server
npm start
```

## 📡 API Details
<details>
<summary>Click to expand</summary>

### Authentication
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user

### Classes
- **GET /api/classes**: Retrieve all available classes
- **POST /api/classes/book**: Book a class

### User Profile
- **GET /api/user/profile**: Retrieve user profile
- **PUT /api/user/profile**: Update user profile

</details>

Enjoy your journey to wellness with Pavitram Yoga Centre! 🌈
