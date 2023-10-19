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
    return await this.patientRepository.save(createPatientDto);
  }

  async findAll() {
    return await this.patientRepository.find();
  }

  async findOne(id: string) {
    const patient = await this.patientRepository.findOneBy({id});
    if(!patient) throw new Error('Patient not found');
    return patient;
  }

  async findDocumentWithPassword (document: number) {
    const patient = await this.patientRepository.findOne({where:{document},select:['id','password']});
    if(!patient) throw new Error('Patient not found');
    return patient;
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepository.findOneBy({id});
    if(!patient) throw new Error('Patient not found');
    return await this.patientRepository.update(id,updatePatientDto);
  }

  async remove(id: string) {
    const patient = await this.patientRepository.findOneBy({id});
    if(!patient) throw new Error('Patient not found');
    await this.patientRepository.delete(id);
    return patient;
  }
}
