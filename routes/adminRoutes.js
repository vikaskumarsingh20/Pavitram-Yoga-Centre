const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/adminController');
const { authenticateAdmin } = require('../middleware/authMiddleware');

router.get('/dashboard', authenticateAdmin, getDashboardData);

module.exports = router;
