import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Paslon } from "../entities/paslon"

export default new class PaslonService {
    private readonly PaslonRepository : Repository<Paslon> = AppDataSource.getRepository(Paslon)

    async create(data: any): Promise<object | string> {
        const createPaslon = this.PaslonRepository
        .createQueryBuilder()
        .insert()
        .into(Paslon)
        .values(data)
        .execute();

        return {
            message: "Success create Paslon",
            data: data
        }
    }

    async get(): Promise<object | string> {
        try {
          const GetPaslon = await this.PaslonRepository.createQueryBuilder("paslon").getMany();
    
          return {
            messages: "Success get data",
            data: GetPaslon,
          };
        } catch (error) {
          throw error;
        }
      }
    
      async getId(id: any): Promise<object> {
        try {
          const PaslonGetById = await this.PaslonRepository
                .createQueryBuilder()
                .select("paslon")
                .from(Paslon, "paslon")
                .where(`paslon.id = :id`, id)
                .getOne()
    
          return {
            messages: "success get data by Id",
            data: PaslonGetById,
          }
        } catch (error) {
          
        }
      }
}