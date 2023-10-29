import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Schedule } from '../schedule/entities/schedule.entity';
import { Specialtie } from '../specialties/entities/specialtie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Schedule, Specialtie])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
