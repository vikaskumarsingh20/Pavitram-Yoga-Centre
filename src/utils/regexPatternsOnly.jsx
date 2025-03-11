// regexPatterns.js

export const regexPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[6-9]\d{9}$/, // 10-digit phone number starting with 6-9
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ // Min 8 chars, 1 uppercase, 1 lowercase, 1 number
};
