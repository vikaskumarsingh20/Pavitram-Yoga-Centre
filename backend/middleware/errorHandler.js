/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    const error = {
        success: false,
        message: err.message || 'Server Error'
    };

    if (err.name === 'ValidationError') {
        error.message = Object.values(err.errors).map(val => val.message);
    }

    res.status(err.status || 500).json(error);
};
