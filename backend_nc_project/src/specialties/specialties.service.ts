import { Injectable } from '@nestjs/common';
import { CreateSpecialtieDto } from './dto/create-specialtie.dto';
import { UpdateSpecialtieDto } from './dto/update-specialtie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialtie } from './entities/specialtie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialtiesService {

  constructor(
    @InjectRepository(Specialtie)
    private readonly specialtieRepository:Repository<Specialtie>
  ){}

  async create(createSpecialtieDto: CreateSpecialtieDto) {
    return await this.specialtieRepository.save(createSpecialtieDto);
  }

  async findAll() {
    return await this.specialtieRepository.find();
  }

  async findOneSpecialtie(id: string) {
    const specialtie = await this.specialtieRepository.findOneBy({id});
    if(!specialtie) throw new Error('Specialtie not found');
    return specialtie;
  }

  async update(id: string, updateSpecialtieDto: UpdateSpecialtieDto) {
    const specialtie = await this.specialtieRepository.findOneBy({id});
    if(!specialtie) throw new Error('Specialtie not found');
    return await this.specialtieRepository.update(id,updateSpecialtieDto);
  }

  async remove(id: string) {
    const specialtie = await this.specialtieRepository.findOneBy({id});
    if(!specialtie) throw new Error('Specialtie not found');
    await this.specialtieRepository.delete(id);
    return specialtie;
  }
}
