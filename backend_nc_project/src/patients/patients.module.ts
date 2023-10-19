import { Module } from '@nestjs/common';
import { PatientService } from './patients.service';
import { PatientsController } from './patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patient])],
  controllers: [PatientsController],
  providers: [PatientService],
  exports:[PatientService]
})
export class PatientsModule {}
