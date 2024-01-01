import { Request, Response } from "express";
import { createPartaiSchema } from "../utils/validator/validator";
import partaiService from "../service/partai-service";

export default new class PartaiController {
    async insert(req: Request, res: Response) {
        try {
            const data = req.body
            data.img = res.locals.filename

            const { error } = createPartaiSchema.validate(data);
            if (error) return res.status(400).json(error.details[0].message);

            const response = await partaiService.create(data)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}