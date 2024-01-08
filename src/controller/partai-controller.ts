import { Request, Response } from "express";
import { createPartaiSchema } from "../utils/validator/validator";
import partaiService from "../service/partai-service";
import cloudinary from "../libs/cloudinary";


export default new class PartaiController {
    async insert(req: Request, res: Response) {
        try {
            const data = req.body
            data.img = res.locals.filename

            const { error, value } = createPartaiSchema.validate(data);
            if (error) return res.status(400).json(error.details[0].message);
            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.img)
            value.img = cloudinaryRes.secure_url

            const response = await partaiService.create(value)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async find(req: Request, res: Response) {
        try {
            const response = await partaiService.get()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = req.params

            const response = await partaiService.getById(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async paslonPick(req: Request, res: Response) {
        try {
            const data = {
                id: req.params.id,
                paslonId: req.body.paslonId
            }

            const response = await partaiService.pickPaslon(data.id, data.paslonId)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}