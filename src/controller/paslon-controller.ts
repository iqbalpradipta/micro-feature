import { Request, Response } from "express";
import paslonService from "../service/paslon-service";
import { createPaslonSchema } from "../utils/validator/validator";

export default new (class PaslonController {
  async insert(req: Request, res: Response) {
    try {
      const data = req.body;
      data.img = res.locals.filename;

      const { error, value } = createPaslonSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);

      const response = await paslonService.create(value);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  
})();
