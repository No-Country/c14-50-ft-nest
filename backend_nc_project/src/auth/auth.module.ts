import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
  TypeOrmModule.forFeature([User]),
  UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,
              UserService,
              JwtService],

})
export class AuthModule {}