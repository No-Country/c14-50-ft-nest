import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([User, Role]),
  UserModule,
  RoleModule,
  ],
  controllers: [AuthController],
  providers: [AuthService,
              UserService,
              JwtService],

})
export class AuthModule {}
