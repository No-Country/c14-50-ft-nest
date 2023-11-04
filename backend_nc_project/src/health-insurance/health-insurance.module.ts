import { Module } from '@nestjs/common';
import { HealthInsuranceController } from './health-insurance.controller';
import { HealthInsuranceService } from './health-insurance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthInsurance } from './entity/health-insurance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HealthInsurance])],
  controllers: [HealthInsuranceController],
  providers: [HealthInsuranceService]
})
export class HealthInsuranceModule {}
