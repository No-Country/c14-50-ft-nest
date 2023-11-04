import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ){}
  create(createScheduleDto: CreateScheduleDto) {
    try {
      
      return this.scheduleRepository.save(createScheduleDto);

    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    try {
      
      return this.scheduleRepository.find();
      
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    try {

      return this.scheduleRepository.findOne({where:{id}});
      
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    try {
      
      return this.scheduleRepository.update(id, updateScheduleDto);

    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {
    try {
      
      const schedule = await this.scheduleRepository.findOneBy({id});
      if(!schedule) throw new Error('Appointment not found');
      return this.scheduleRepository.delete(id);

    } catch (error) {
      console.error(error);
    }
  }
}
