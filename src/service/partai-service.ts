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
            .createQueryBuilder('partai')
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

    async pickPaslon(id: any, paslon: any): Promise<object>{
        try{
            const toPartai = await this.PartaiRepository
            .createQueryBuilder()
            .update('partai')
            .set({ paslon: paslon})
            .where("id = :id", { id })
            .execute();

            return{
                messages: "Success Pick partai",
                data: toPartai
            }
        } catch (error) {
            throw error
        }
    }

    async update(id: any, data: any): Promise<object> {
        try {
          const updatePartai = await this.PartaiRepository
          .createQueryBuilder()
          .update('partai')
          .set(data)
          .where("id = :id", { id })
          .execute();
            return {
              messages: "success update partai",
              data: updatePartai
            }
        } catch (error) {
            throw error
        }
      }
  
      async delete(id: any): Promise<object> {
        try {
          const deletePartai = await this.PartaiRepository
          .createQueryBuilder()
          .delete()
          .from(Partai)
          .where("id = :id", { id })
          .execute();
          return{
            messages: 'success delete partai',
            data: deletePartai
          }
        } catch (error) {
            throw error
        }
      }
}