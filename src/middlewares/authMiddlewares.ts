import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import SECRET_KEY from "../utils/helper/secretKey";

export default new class authMidlleware {
    Auth(req: Request, res: Response, Next: NextFunction): Response {
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({messages: 'unauthorized'})
        }

        const token = authHeader.split(" ")[1]

        try {
            const loginSession = jwt.verify(token, SECRET_KEY)
            res.locals.loginSession = loginSession

            Next()
        } catch (error) {
            return res.status(401).json({messages: 'token not valid'})
        }
    }
}