import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { CreateSpecialtieDto } from './dto/create-specialtie.dto';
import { UpdateSpecialtieDto } from './dto/update-specialtie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Specialty')
@Controller('specialties')
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Post()
  create(@Body() createSpecialtieDto: CreateSpecialtieDto) {
    return this.specialtiesService.create(createSpecialtieDto);
  }

  @Get()
  findAll() {
    return this.specialtiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialtiesService.findOneSpecialtie(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialtieDto: UpdateSpecialtieDto) {
    return this.specialtiesService.update(id, updateSpecialtieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialtiesService.remove(id);
  }
}