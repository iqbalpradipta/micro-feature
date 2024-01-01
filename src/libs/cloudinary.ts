import { v2 as cloudinary } from "cloudinary";
export default new class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: process.env.CLOUDNAME,
      api_key: process.env.APIKEY,
      api_secret: process.env.APISECRET,
      secure: true,
    })
  }

  async destination(image: string) : Promise<any> {
    try {
      return await cloudinary.uploader.upload(`./src/uploads/${image}`, (cb) => {
        console.log(cb)
      })
    } catch (error) {
      throw error
    }
  }
}
