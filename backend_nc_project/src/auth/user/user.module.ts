import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { DoctorModule } from '../../doctor/doctor.module';
import { DoctorService } from '../../doctor/doctor.service';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { PatientsModule } from 'src/patients/patients.module';
import { PatientService } from 'src/patients/patients.service';
import { Patient } from 'src/patients/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Doctor, Patient]), JwtModule, DoctorModule, PatientsModule],
  controllers: [UserController],
  providers: [UserService, DoctorService, PatientService]
})
export class UserModule {}
