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
import { PatientsModule } from '../patients/patients.module';
import { DoctorModule } from '../doctor/doctor.module';
import { DoctorService } from '../doctor/doctor.service';
import { Doctor } from '../doctor/entities/doctor.entity';
import { Schedule } from '../schedule/entities/schedule.entity';
import { Specialtie } from '../specialties/entities/specialtie.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([User, Role, Doctor, Schedule, Specialtie]),
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
