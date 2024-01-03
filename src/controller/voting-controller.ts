import { Request, Response } from "express";
import votingService from "../service/voting-service";

export default new class VotingController {
    async find(req: Request, res: Response) {
        try {
          
          const response = await votingService.get();
    
          return res.status(200).json(response);
        } catch (error) {
          return res.status(500).json(error);
        }
      }
}