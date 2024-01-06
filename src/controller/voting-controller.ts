import { Request, Response } from "express";
import votingService from "../service/voting-service";
import { Paslon } from "../entities/paslon";
import { Users } from "../entities/users";
import paslonService from "../service/paslon-service";
import usersService from "../service/users-service";

export default new class VotingController {
    async find(req: Request, res: Response) {
        try {
          
          const response = await votingService.get();
    
          return res.status(200).json(response);
        } catch (error) {
          return res.status(500).json(error);
        }
      }

    async paslonVote(req: Request, res: Response) {
      try {
        const data = {
          userId: req.body.userId,
          paslonId: req.body.paslonId
        }

        const response = await votingService.votePaslon(data.paslonId, data.userId)
        
        res.status(200).json(response)
      } catch (error) {
        console.log(error)
        return res.status(500).json(error)
      }
    }
}