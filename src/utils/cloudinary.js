import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});


const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null
        const response = await cloudinary.uploader.upload(localfilePath,
            {
                resource_type: "auto",
            })
        // console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localfilePath)
        return response;
    } catch (error) {
        fs.unlinkSync()
        return null
    }
}

export { uploadOnCloudinary }