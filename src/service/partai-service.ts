import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Partai } from "../entities/partai"

export default new class PartaiService {
    private readonly PartaiRepository : Repository<Partai> = AppDataSource.getRepository(Partai)
    async create(data: any): Promise<object> {
        try {
            const createPartai = await this.PartaiRepository
            .createQueryBuilder()
            .insert()
            .into(Partai)
            .values(data)
            .execute()
            return {
                message: "create partai success",
                data: data,
            }
        } catch (error) {
            throw error
        }
    }

    async get(): Promise<object> {
        try {
            const GetPartai = await this.PartaiRepository.createQueryBuilder().getMany()
            return{
                meesages: "Get partai success",
                data: GetPartai
            }
        } catch (error) {
            throw error
        }
    }

    async getById(id: any): Promise<object>{
        try {
            const GetPartaiById = await this.PartaiRepository
            .createQueryBuilder()
            .select("partai")
            .from(Partai, 'partai')
            .where('partai.id = :id', id)
            .getOneOrFail()

            return{
                messages: "Success get partai by id",
                data: GetPartaiById
            }
        } catch (error) {
            throw error
        }
    } 
}