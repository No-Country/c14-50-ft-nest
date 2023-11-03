import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentsService {

  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository:Repository<Appointment>
  ){}

  async create(createAppointmentDto: CreateAppointmentDto) {
    try {

      return await this.appointmentRepository.save(createAppointmentDto);

    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      
      return await this.appointmentRepository.find();

    } catch (error) {
      console.error(error);
    }
  }

  async findOneByDoctor(doctorId: string){
    
    try {

      console.log('Doctor Id: ', doctorId);
      return await this.appointmentRepository.find({
        where: {
          doctor: doctorId
        }
      });

    } catch (err) {
      console.error(err);
    }
  }

  async findOneByPatient(patientId: string){
    try {

      return await this.appointmentRepository.find({
        where: {
          patient: patientId
        }
      });
      
    } catch (error) {
      console.error(error);
    }
  }

  async findAppointmentsByUser(id:string) {
    try {

      const appointment = await this.appointmentRepository.find({where:{patient:id}});
      if(!appointment) throw new Error('Appointment not found');
      return appointment;
      
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    try {
      
      const appointment = await this.appointmentRepository.findOneBy({id});
      if(!appointment) throw new Error('Appointment not found');
      return await this.appointmentRepository.update(id, updateAppointmentDto);

    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {

    try {
      
      const appointment = await this.appointmentRepository.findOneBy({id});
      if(!appointment) throw new Error('Appointment not found');
      await this.appointmentRepository.delete(id);
      return appointment;

    } catch (error) {
      console.error(error);
    }
  }
}