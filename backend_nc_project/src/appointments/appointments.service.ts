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
    return await this.appointmentRepository.save(createAppointmentDto);
  }

  async findAll() {
    return await this.appointmentRepository.find();
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
    return await this.appointmentRepository.find({
      where: {
        patient: patientId
      }
    });
  }

  async findAppointmentsByUser(id:string) {
    const appointment = await this.appointmentRepository.find({where:{patient:id}});
    if(!appointment) throw new Error('Appointment not found');
    return appointment;
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    const appointment = await this.appointmentRepository.findOneBy({id});
    if(!appointment) throw new Error('Appointment not found');
    return await this.appointmentRepository.update(id, updateAppointmentDto);
  }

  async remove(id: string) {
    const appointment = await this.appointmentRepository.findOneBy({id});
    if(!appointment) throw new Error('Appointment not found');
    await this.appointmentRepository.delete(id);
    return appointment;
  }
}