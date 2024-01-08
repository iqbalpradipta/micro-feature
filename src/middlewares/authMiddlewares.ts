import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"
import SECRET_KEY from "../utils/helper/secretKey";
import Roles from "./rolesJWT";

export default new class authMidlleware {
    Auth(requiredRole: string) {
        return (req: Request, res: Response, Next: NextFunction): Response => {
            const authHeader = req.headers.authorization

            if(!authHeader || !authHeader.startsWith("Bearer")){
                return res.status(401).json({messages: 'unauthorized'})
            }

            const token = authHeader.split(" ")[1]
            try {
                const decodedToken: any = jwt.verify(token, SECRET_KEY);
                const userRoles = decodedToken.Users.roles

                if (!userRoles.includes(requiredRole)) {
                return res.status(403).json({ message: 'User role not found' });
                }

                (req as any).user = decodedToken;
                res.locals.loginSession = decodedToken;
                Next();
            } catch (error) {
                return res.status(401).json({messages: 'token not valid'})
            }
        }
    }        
}