import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RoleModule } from './role/role.module';
import { Role } from './role/entities/role.entity';
import { PatientsModule } from 'src/patients/patients.module';
import { DoctorModule } from 'src/doctor/doctor.module';
import { DoctorService } from 'src/doctor/doctor.service';
import { Doctor } from 'src/doctor/entities/doctor.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([User, Role, Doctor]),
  UserModule,
  RoleModule,
  PatientsModule,
  DoctorModule
  ],
  controllers: [AuthController],
  providers: [AuthService,
              UserService,
              JwtService,
              DoctorService],

})
export class AuthModule {}
