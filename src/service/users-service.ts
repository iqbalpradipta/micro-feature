import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Users } from "../entities/users"

export default new class UsersService {
    private readonly UsersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    async get(): Promise<object | string> {
        try {
          const GetUsers = await this.UsersRepository
          .createQueryBuilder("users")
          .getMany();
    
          return {
            messages: "Success get data",
            data: GetUsers,
          };
        } catch (error) {
          throw error;
        }
      }
    
      async getId(id: any): Promise<object> {
        try {
          const UsersGetById = await this.UsersRepository
                .createQueryBuilder("users")
                .where(`users.id = :id`, {id})
                .getMany()
    
          return {
            messages: "success get data by Id",
            data: UsersGetById,
          }
        } catch (error) {
          console.error("Error in getId:", error);
          throw error
        }
      }
}