import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthInsuranceService } from './health-insurance.service';
import { CreateHealthInsurance } from './dto/create-health-insurance.dto';
import { UpdateHealthInsurance } from './dto/update-health-insurance .dto';

@Controller('health-insurance')
export class HealthInsuranceController {
    constructor(private readonly healthInsuranceService: HealthInsuranceService) {}

  @Post()
  create(@Body() createHealthInsurance: CreateHealthInsurance) {
    return this.healthInsuranceService.create(createHealthInsurance);
  }

  @Get()
  findAll() {
    return this.healthInsuranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthInsuranceService.findHealthInsuranceById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthInsurance: UpdateHealthInsurance) {
    return this.healthInsuranceService.update(id, updateHealthInsurance);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthInsuranceService.remove(id);
  }
}
