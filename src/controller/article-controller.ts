import { Request, Response } from "express";
import articleService from "../service/article-service";
import { createArticleSchema } from "../utils/validator/validator";
import cloudinary from "../libs/cloudinary";

export default new (class ArticleController {
  async find(req: Request, res: Response) {
    try {
      const response = await articleService.get();

      const responseData = response as { data: any };

      for (let i = 0; i < responseData.data.length; i++) {
        delete responseData.data[i].description;
      }

      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async findDetail(req: Request, res: Response) {
    try {
      const response = await articleService.get();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async insert(req: Request, res: Response) {
    try {
      const data = req.body
      data.img = res.locals.filename

      const { error, value } = createArticleSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      // cloudinary.upload()
      // const cloudinaryRes = await cloudinary.destination(value.img)

      // value.img = cloudinaryRes

      const response = await articleService.create(data);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
})();
