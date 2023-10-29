import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { DoctorModule } from '../../doctor/doctor.module';
import { DoctorService } from '../../doctor/doctor.service';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { PatientsModule } from '../../patients/patients.module';
import { PatientService } from '../../patients/patients.service';
import { Patient } from '../../patients/entities/patient.entity';
import { Schedule } from '../../schedule/entities/schedule.entity';
import { Specialtie } from '../../specialties/entities/specialtie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Doctor, Patient, Schedule, Specialtie]), JwtModule, DoctorModule, PatientsModule],
  controllers: [UserController],
  providers: [UserService, DoctorService, PatientService]
})
export class UserModule {}
