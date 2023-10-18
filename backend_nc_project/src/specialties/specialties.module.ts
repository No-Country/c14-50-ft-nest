import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesController } from './specialties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialtie } from './entities/specialtie.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Specialtie])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
  exports:[SpecialtiesService]
})
export class SpecialtiesModule {}