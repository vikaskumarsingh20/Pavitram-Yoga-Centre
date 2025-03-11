/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Footer from "../Home/FooterCopyright";
import NavBar from "./NavBar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getEmailError, getPasswordError,getMobileNumberError } from '../../utils/regexPatterns';

function Registration() {

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', phone: '' });
 const {  setIsLoggedIn, setCurrentUser  } = useAuth();
  const navigate = useNavigate();
  // Handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: name === 'email' ? getEmailError(value) : name === 'password' ? getPasswordError(value) : name === 'phone' ? getMobileNumberError(value) : ''
    });
  };

  const validateForm = () => {
    const emailError = getEmailError(formData.email);
    const passwordError = getPasswordError(formData.password);
    const phoneError = getMobileNumberError(formData.phone);
    setErrors({ email: emailError, password: passwordError, phone: phoneError });
    return !emailError && !passwordError && !phoneError;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the form errors");
      return;
  }

    try {
      console.log("Login data:", formData);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        setFormData({ email: "", password: "" });
        setCurrentUser(data.user); // <-- Ensure this is added
        console.log("setCurrentUser:", data.user);
        localStorage.setItem("currentUser", JSON.stringify(data.user)); // <-- Persist user data
        setIsLoggedIn(true);
        toast.success("Registration successful!", { duration: 5000 });
        setTimeout(() => navigate("/"), 1000);
      } else {
        console.error("Login Error:", data.error);
        toast.error(data.error || "Invalid user credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const toggleRepeatPasswordVisibility = (e) => {
    e.preventDefault();
    setShowRepeatPassword(!showRepeatPassword);
  };
  return (
    <>
      <Toaster />
      <NavBar />
      <div className="container-fluid laptop-margin ">
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
          <h1 className="text-center text-white z-2"> Registration</h1>
          <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
            Home
          </Link>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-10 border p-4 shadow-sm">
              <h3 className="fw-bold">Registration</h3>
              <p>If you have an account with us, please log in.</p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Full Name
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Phone
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                  />
                   {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Email
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Password
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary border-1"
                      type="button"
                      onClick={togglePasswordVisiblity}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Address{" "}
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Password Confirm
                    <span className="text-danger" required>
                      *
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      type={showRepeatPassword ? "text" : "password"}
                      className="form-control"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary border-1"
                      type="button"
                      onClick={toggleRepeatPasswordVisibility}
                    >
                      {showRepeatPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={
                  !(
                    formData.fullName &&
                    formData.phone &&
                    formData.email &&
                    formData.password &&
                    formData.address &&
                    formData.confirmPassword
                  )
                }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
