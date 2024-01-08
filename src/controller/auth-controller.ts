import { Request, Response } from "express";
import authService from "../service/auth-service";
import { createLoginSchema, createUserSchema } from "../utils/validator/validator";
import * as bcrypt from "bcrypt"


export default new class AuthController {
    async authRegister(req: Request, res: Response) {
        try {
            const data = req.body 

            const { error, value } = createUserSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)
            
            const hashPassword = await bcrypt.hash(data.password, 10)

            value.roles = ['users']
            value.voted = false

            value.password = hashPassword

            const response = await authService.register(value)
            res.status(201).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async authLogin(req: Request, res: Response){
        try {
            const data = req.body

            const { error, value } = createLoginSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)

            const response = await authService.login(value)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async registerAdmin(req: Request, res: Response) {
        try {
            const data = req.body 

            const { error, value } = createUserSchema.validate(data)
            if (error) return res.status(400).json(error.details[0].message)
            
            const hashPassword = await bcrypt.hash(data.password, 10)

            value.roles = ['admin']
            value.voted = false

            value.password = hashPassword

            const response = await authService.register(value)
            res.status(201).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}