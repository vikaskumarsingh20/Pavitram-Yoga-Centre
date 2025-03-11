
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
export const MOBILE_NUMBER_REGEX = /^[6-9]\d{9}$/;

export const validateEmail = (email) => {
    // Example: validateEmail('example@gmail.com') // returns true
    return EMAIL_REGEX.test(email);
};

export const validatePassword = (password) => {
    // Example: validatePassword('Password123') // returns true
    return PASSWORD_REGEX.test(password);
};
export const validateMobileNumber = (mobileNumber) => {
    // Example: validateMobileNumber('9876543210') // returns true
    return MOBILE_NUMBER_REGEX.test(mobileNumber);
}

export const getEmailError = (email) => {
    if (!email) return "Email is required";
    if (!validateEmail(email)) return "Please enter a valid email address (e.g. example@gmail.com)";
    return "";
};

export const getPasswordError = (password) => {
    if (!password) return "Password is required";
    if (!validatePassword(password)) return "Password must be at least 8 characters long and contain at least one letter and one number (e.g. Password123)";
    return "";
};

export const getMobileNumberError = (mobileNumber) => {
    if (!mobileNumber) return "Mobile number is required";
    if (!validateMobileNumber(mobileNumber)) return "Please enter a valid 10-digit mobile number";
    return "";
}
