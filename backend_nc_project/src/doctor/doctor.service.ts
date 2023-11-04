import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { Schedule } from '../schedule/entities/schedule.entity';
import { Specialtie } from '../specialties/entities/specialtie.entity';

@Injectable()
export class DoctorService {

  constructor( 
    @InjectRepository(Doctor) private readonly doctorRepository: Repository<Doctor>,

    @InjectRepository(Schedule) private readonly scheduleRepository:Repository<Schedule>,

    @InjectRepository(Specialtie) private readonly specialtieRepository: Repository<Specialtie>,
    
  ){}

  async create( { firstName, lastName, phone, birthDate, schedule, specialties, registrationNumber, gender }: CreateDoctorDto) {
 
    const query = {}

    specialties.forEach(specialtie => {
      query["name"] = specialtie
    })

    try {
      
      const specialtiesObjects = await this.specialtieRepository.find({
        where: query
      })
  
      const doctorSchema = {
        firstName,
        lastName,
        phone,
        birthDate,
        schedule,
        specialties: specialtiesObjects,
        registrationNumber,
        gender
      }
  
      const doctor = this.doctorRepository.create(doctorSchema);
      const result = await this.doctorRepository.save(doctor);
  
      const horario = [
        ['9:00', '9:30'],
        ['9:30', '10:00'],
        ['10:00', '10:30'],
        ['10:30', '11:00'],
        ['11:00', '11:30'],
        ['11:30', '12:00'],
        ['12:00', '12:30'], 
        ['13:00', '13:30'],
        ['14:00', '14:30'],
        ['14:30', '15:00'],
        ['15:00', '15:30'],
        ['15:30', '16:00'],
        ['16:00', '16:30'],
        ['16:30', '17:00'],
      ]
  
      const schedules = horario.map((intevarlo)=>{
        const horarioSchedule = {
          doctor:doctor,
          startTime:intevarlo[0],
          endTime:intevarlo[1],
          interval:"30 min",
          dia:"Jueves"
        }
        return this.scheduleRepository.create(horarioSchedule)
      })
  
      const result2=await this.scheduleRepository.save(schedules);
  
      return {doctor:result,schedules:result2}

    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {

      return this.doctorRepository.find();
      
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {

    try {
      
      return this.doctorRepository.findOne({
        where: {
          id
        }
      });

    } catch (error) {
      console.error(error);
      
    }
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {

    try {

      const doctor = await this.doctorRepository.update({ id }, updateDoctorDto);
          if (!doctor) {
            throw new NotFoundException(`Doctor with Id ${id} not found`);
          }
      
          return `Doctor with Id ${id} was successfully updated`;
      
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {
    try {
      
      const doctor = await this.doctorRepository.update({ id, is_deleted: false }, {
        is_deleted: true,
      });
      
      if (doctor.affected !== 1) {
        throw new NotFoundException(`Doctor with Id ${id} not found`);
      }
      
      await this.doctorRepository.softDelete(id);
  
      return `Doctor with Id ${id} was successfully deleted`;
      
    } catch (error) {
      console.error(error);
    }
  }
}
