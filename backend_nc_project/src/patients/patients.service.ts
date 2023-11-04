import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {

  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository:Repository<Patient>
  ){}

  async create(createPatientDto: CreatePatientDto) {
    try {

      return await this.patientRepository.save(createPatientDto);
      
    } catch (error) {
      console.error(error);
    }
  }
  
  async findAll() {
    try {

      return await this.patientRepository.find();
      
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    try {

      const patient = await this.patientRepository.findOneBy({id});
      if(!patient) throw new Error('Patient not found');
      return patient;
      
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {

    try {

      const patient = await this.patientRepository.findOneBy({id});
      if(!patient) throw new Error('Patient not found');
      return await this.patientRepository.update(id,updatePatientDto);
      
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {
    try {
      
      const patient = await this.patientRepository.findOneBy({id});
      if(!patient) throw new Error('Patient not found');
      await this.patientRepository.delete(id);
      return patient;
      
    } catch (error) {
      console.error(error);
    }
  }
}
