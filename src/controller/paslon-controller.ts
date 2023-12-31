import { Request, Response } from "express";
import paslonService from "../service/paslon-service";
import { createPaslonSchema } from "../utils/validator/validator";
import cloudinary from "../libs/cloudinary";

export default new (class PaslonController {
  async insert(req: Request, res: Response) {
    try {
      const data = req.body
      data.img = res.locals.filename

      const { error, value } = createPaslonSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      cloudinary.upload()
      const cloudinaryRes = await cloudinary.destination(value.img)
      value.img = cloudinaryRes.secure_url

      const response = await paslonService.create(value);

      return res.status(200).json(response);
    } catch (error) {

      return res.status(500).json(error);
    }
  }

  async find(req: Request, res: Response) {
    try {
      
      const response = await paslonService.get();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id
      const response = await paslonService.getId(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
        const data = req.body
        const id = req.params.id

        const response = await paslonService.update(id, data)

        res.status(200).json(response)
    } catch (error) {
      console.log(error)
        res.status(500).json(error)
    }
  }

  async delete(req: Request, res: Response) {
    try {
        const id = req.params.id
        const response = await paslonService.delete(id)
        
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
  }

})();
