import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Users } from "../entities/users"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import SECRET_KEY from "../utils/helper/secretKey"


export default new class AuthService {
    private readonly AuthRepository: Repository<Users> = AppDataSource.getRepository(Users)
    async register(data: any): Promise<object | string> {
        try {
            const checkUser = await this.AuthRepository.count({ where: { username: data.username } })
            if (checkUser > 0) return `User ${data.username} has been taken`

            const authRegister = await this.AuthRepository.save(data)
            return{
                messages: "Create data success",
                data: authRegister
            }
        } catch (error) {
            throw error
        }
    }

    async login(data: any): Promise<object | string>{
        try {
            const checkUser = await this.AuthRepository.findOne({ where: { username: data.username } })
            if (!checkUser) return `User ${data.username} not found, please check again or register to login`

            const passwordCompare = await bcrypt.compare(data.password, checkUser.password)
            if(!passwordCompare) return 'Password is wrong!'

            const dataObj = {
                fullName: checkUser.fullName,
                alamat: checkUser.alamat,
                jenisKelamin: checkUser.jenisKelamin,
                username: checkUser.username
            }

            const token = jwt.sign({dataObj}, SECRET_KEY, { expiresIn: "1h" })

            return {
                messages: 'login success',
                token,
            }
        } catch (error) {
            throw error
        }
    }
}