import { Routes, Route } from 'react-router-dom';
// import AdminDashboard from '../dashboard/AdminDashboard';
import AdminLogin from '../login/AdminLogin';

function AdminRoutes() {
    return (
        <Routes>
            {/* Direct Routes without authentication */}
            {/* <Route path="/" element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} /> */}
            <Route path="login" element={<AdminLogin/>} />
        </Routes>
    );
}

export default AdminRoutes;


// import { Routes, Route, Navigate } from 'react-router-dom';
// import AdminLogin from '../auth/AdminLogin';
// import AdminDashboard from '../Dashboard/AdminDashboard';
// import Layout from '../components/Layout';
// import { useAuth } from '../../src/components/context/AuthContext';

// function AdminRoutes() {
//     const { isAdminAuthenticated } = useAuth();

//     // Protected Route component
//     const ProtectedRoute = ({ children }) => {
//         if (!isAdminAuthenticated) {
//             return <Navigate to="/admin/login" replace />;
//         }
//         return children;
//     };

//     return (
//         <Routes>
//             {/* Public Routes */}
//             <Route path="/login" element={<AdminLogin />} />

//             {/* Protected Routes */}
//             <Route path="/" element={
//                 <ProtectedRoute>
//                     <Layout />
//                 </ProtectedRoute>
//             }>
//                 <Route index element={<AdminDashboard />} />
//                 <Route path="dashboard" element={<AdminDashboard />} />
//             </Route>
//         </Routes>
//     );
// }

// export default AdminRoutes;