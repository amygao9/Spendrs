import imageCompression from "browser-image-compression";

export const compressProfilePicture = async (imageFile) => {
  const options = {
    maxSizeMB: 0.05,
    maxWidthOrHeight: 400,
    useWebWorker: true,
    fileType: "image/jpeg",
  }
  try {
    return await imageCompression(imageFile, options);
  } catch (error) {
    console.log(error);
  }
}

export const compressPostPicture = async (imageFile) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1000,
    useWebWorker: true,
    fileType: "image/jpeg",
  }
  try {
    return await imageCompression(imageFile, options);
  } catch (error) {
    console.log(error);
  }
}