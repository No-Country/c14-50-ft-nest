import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

  constructor( @InjectRepository(Doctor) doctorRepository: Repository<Doctor>){}

  async create(createDoctorDto: CreateDoctorDto) {
    return 'This action adds a new doctor';
  }

  async findAll() {
    return `This action returns all doctor`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  async remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
