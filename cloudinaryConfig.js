const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// connect my app to cloudinary 
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

// how and where to store form files 
const strategy = new CloudinaryStorage({
    cloudinary:cloudinary, // where to store 
    params:{                // how to store 
        folder:"WedZo",
        allowedFormats:['png','jpeg','jpg']
    }
});

module.exports={
    cloudinary,
    strategy,
}