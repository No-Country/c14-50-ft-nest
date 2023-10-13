import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot({
    isGlobal: true,
})

export const JWT_SECRET = process.env.JWT_SECRET;