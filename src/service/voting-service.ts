import { Repository } from "typeorm"
import { Voting } from "../entities/voting"
import { AppDataSource } from "../data-source"
import { Paslon } from "../entities/paslon"
import { Users } from "../entities/users"

export default new class VotingService {
    private readonly VotingRepository : Repository<Voting> = AppDataSource.getRepository(Voting)
    private paslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon);
    private usersRepository: Repository<Users> = AppDataSource.getRepository(Users);
  
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

      async votePaslon(paslonId: number, usersId: number): Promise<object | string> {
        try {
          const paslon = await this.paslonRepository.findOne({ where: { id: paslonId } });
          const users = await this.usersRepository.findOne({ where: { id: usersId } });
          
          paslon.votePoint += 1;

          await this.paslonRepository.save(paslon);

          const createVoting = this.VotingRepository
            .createQueryBuilder()
            .insert()
            .into(Voting)
            .values({ paslon: paslon, users: users })
            .execute();
      
          return {
            message: "Success Vote Paslon",
            data: createVoting
          };
        } catch (error) {
          throw error;
        }
      }
}