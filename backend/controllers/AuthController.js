/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Add JWT_SECRET validation at the top of the file
if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not defined in environment variables!");
  throw new Error("JWT_SECRET must be defined");
}

exports.signup = async (req, res) => {
  try {
    const { 
      fullName, 
      phone, 
      email, 
      password, 
      address, 
      confirmPassword, 
      gender, 
      country, 
      state, 
      city 
    } = req.body;

    // Check if all required fields are present
    if (!fullName || !phone || !email || !password || !address || !confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Set default values for missing required fields
    const defaultGender = gender || 'male'; // Default to 'male' if not provided
    const defaultCountry = country || 'India'; // Default to 'India' if not provided
    const defaultState = state || 'Default State'; // Default value if not provided
    const defaultCity = city || 'Default City'; // Default value if not provided

    // Create new user with all required fields
    const user = await User.create({
      fullName,
      phone,
      email,
      password: hashedPassword,
      address,
      gender: defaultGender,
      country: defaultCountry,
      state: defaultState,
      city: defaultCity,
    });

    // Create JWT token after successful registration
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    let token;
    try {
      token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
    } catch (tokenError) {
      console.error("Token creation failed:", tokenError);
      return res.status(500).json({
        success: false,
        message: "Error during authentication",
      });
    }

    // Set cookie with token
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(201).json({
      success: true,
      user,
      token,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Signup error:", error.message, error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create JWT token
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    let token;
    try {
      token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
    } catch (tokenError) {
      console.error("Token creation failed:", tokenError);
      return res.status(500).json({
        success: false,
        message: "Error during authentication",
      });
    }

    // Set cookie with token
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      success: true,
      user,
      token,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be logged in. Please try again.",
    });
  }
};

