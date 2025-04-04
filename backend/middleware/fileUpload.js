const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Function to delete previous profile image
const deleteUserImage = (filename) => {
    if (!filename) return false;
    
    // Extract just the filename from the full URL if needed
    const baseFilename = filename.includes('/uploads/') 
        ? filename.split('/uploads/')[1] 
        : filename;
    
    const filePath = path.join(uploadsDir, baseFilename);
    
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Deleted previous profile image: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error deleting previous profile image:', error);
        return false;
    }
};

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        // Preserve original filename with a unique identifier
        const originalName = file.originalname.replace(/\s+/g, '-');
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Format: originalname-timestamp-random.extension
        cb(null, `${path.parse(originalName).name}-${uniqueSuffix}${path.extname(originalName)}`);
    }
});

// File filter function
const fileFilter = (req, file, cb) => {
    // Accept images only
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.'), false);
    }
};

// Configure multer upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB max file size
    },
    fileFilter: fileFilter
});

// Log details about the upload path
console.log('File upload directory configured as:', uploadsDir);
console.log('Directory exists:', fs.existsSync(uploadsDir));

// Middleware to handle file upload errors
const handleUploadError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File size is too large. Maximum size is 5MB'
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    next();
};

// Export middleware functions
module.exports = {
    uploadMiddleware: upload.single('photo'),
    handleUploadError,
    uploadsDir,
    deleteUserImage
};
