import { ConfigModule } from "@nestjs/config";
import { Role } from "../../auth/role/entities/role.entity"
import { User } from "../../auth/user/entities/user.entity"

ConfigModule.forRoot({
  isGlobal: true,
})

export const dataSource = async () => {
    return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User, Role],
    synchronize: true
  }
}