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
    return this.scheduleRepository.save(createScheduleDto);
  }

  findAll() {
    return this.scheduleRepository.find();
  }

  findOne(id: string) {
    return this.scheduleRepository.findOne({where:{id}});
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleRepository.update(id, updateScheduleDto);
  }

  remove(id: number) {
    return this.scheduleRepository.delete(id);
  }
}
