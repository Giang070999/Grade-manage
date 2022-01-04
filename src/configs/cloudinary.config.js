require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Multer config for image
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'dev',
        // format: async (req, file) => 'png', // supports promises as well
        //public_id: (req, file) => 'computed-filename-using-request',
    },
});
const parser = multer({ storage: storage });

const storageFile = multer({
    storage: multer.diskStorage({}),
});

module.exports = { cloudinary, parser, storageFile };
