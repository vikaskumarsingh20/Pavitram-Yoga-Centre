const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');

// Middleware and other routes
app.use(express.json());
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;