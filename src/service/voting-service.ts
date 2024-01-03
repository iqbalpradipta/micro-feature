import { Repository } from "typeorm"
import { Voting } from "../entities/voting"
import { AppDataSource } from "../data-source"

export default new class VotingService {
    private readonly VotingRepository : Repository<Voting> = AppDataSource.getRepository(Voting)

    async get(): Promise<object | string> {
        try {
          const GetVoting = await this.VotingRepository
          .createQueryBuilder("voting")
          .leftJoinAndSelect("voting.users", "users")
          .leftJoinAndSelect("voting.paslon", "paslon")
          .select([
            "voting.id",
            "users.fullName",
            "users.alamat",
            "users.jenisKelamin",
            "paslon.name",
          ])
          .getMany();
    
          return {
            messages: "Success get data",
            data: GetVoting,
          };
        } catch (error) {
          throw error;
        }
      }

}