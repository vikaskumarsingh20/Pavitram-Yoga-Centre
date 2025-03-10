const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/AuthController");

router.post("/auth/signup", signup);

module.exports = router;