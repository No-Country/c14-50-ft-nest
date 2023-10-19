import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {

  constructor( @InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>){}

  async create(createDoctorDto: CreateDoctorDto) {
    const doctor = this.doctorRepository.create(createDoctorDto);

    return await this.doctorRepository.save(doctor);
  }

  async findAll() {
    return this.doctorRepository.find();
  }

  async findOne(id: string) {
    return this.doctorRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const doctor = await this.doctorRepository.update({ id }, updateDoctorDto);
        console.log(doctor)
        if (!doctor) {
          throw new NotFoundException(`Doctor with Id ${id} not found`);
        }
    
        return `Doctor with Id ${id} was successfully updated`;
  }

  async remove(id: string) {
    const doctor = await this.doctorRepository.update({ id, is_deleted: false }, {
      is_deleted: true,
    });
    
    if (doctor.affected !== 1) {
      throw new NotFoundException(`Doctor with Id ${id} not found`);
    }
    
    await this.doctorRepository.softDelete(id);

    return `Doctor with Id ${id} was successfully deleted`;
  }
}
