import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Partai } from "../entities/partai"

export default new class PartaiService {
    private readonly PartaiRepository : Repository<Partai> = AppDataSource.getRepository(Partai)
    async create(data: any): Promise<object> {
        try {
            const createPartai = await this.PartaiRepository.createQueryBuilder().insert().into(Partai).values(data)
            return {
                message: "create partai success",
                data: data,
            }
        } catch (error) {
            
        }
    }
}