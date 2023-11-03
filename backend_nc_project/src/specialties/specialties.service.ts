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

    try {
      
      return await this.specialtieRepository.save(createSpecialtieDto);

    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {

      return await this.specialtieRepository.find();
      
    } catch (error) {
      console.error(error);
    }
  }

  async findOneSpecialtie(id: string) {
    try {

      const specialtie = await this.specialtieRepository.findOneBy({id});
      if(!specialtie) throw new Error('Specialtie not found');
      return specialtie;
      
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, updateSpecialtieDto: UpdateSpecialtieDto) {

    try {

      const specialtie = await this.specialtieRepository.findOneBy({id});
      if(!specialtie) throw new Error('Specialtie not found');
      return await this.specialtieRepository.update(id,updateSpecialtieDto);
      
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {

    try {
      
      const specialtie = await this.specialtieRepository.findOneBy({id});
      if(!specialtie) throw new Error('Specialtie not found');
      await this.specialtieRepository.delete(id);
      return specialtie;
      
    } catch (error) {
      console.error(error);
    }
  }
}
