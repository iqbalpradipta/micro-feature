import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Paslon } from "../entities/paslon"

export default new class Paslon {
    private readonly PaslonRepository : Repository<Paslon> = AppDataSource.getRepository(Paslon)

    async create(data: any): Promise<object | string> {
        const createPaslon = this.PaslonRepository.createQueryBuilder().insert().into(Paslon).values(data).execute()

        return {
            message: "Success create Paslon",
            data: Paslon
        }
    }
}