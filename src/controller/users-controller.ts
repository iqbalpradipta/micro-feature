import { Request, Response } from "express";
import usersService from "../service/users-service";

export default new class UserController {
    async find(req: Request, res: Response) {
        try {
          
          const response = await usersService.get();
    
          return res.status(200).json(response);
        } catch (error) {
          return res.status(500).json(error);
        }
      }
    
      async findById(req: Request, res: Response) {
        try {
          const id = req.params.id
          const response = await usersService.getId(id);
    
          return res.status(200).json(response);
        } catch (error) {
          return res.status(500).json(error);
        }
      }

      async update(req: Request, res: Response) {
        try {
            const data = req.body
            const id = req.params.id
    
            const response = await usersService.update(id, data)
    
            res.status(200).json(response)
        } catch (error) {
          console.log(error)
            res.status(500).json(error)
        }
      }
    
      async delete(req: Request, res: Response) {
        try {
            const id = req.params.id
            const response = await usersService.delete(id)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
      }
}