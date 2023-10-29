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

  //async fillTable(id:string){
  //  const horario = [
  //    ['9:00', '9:30'],
  //    ['10:00', '10:30'],
  //    ['11:00', '11:30'],
  //    ['12:00', '12:30'],
  //    ['13:00', '13:30'],
  //    ['14:00', '14:30'],
  //    ['15:00', '15:30'],
  //    ['16:00', '16:30']
  //  ]
  //  horario.forEach(async (item) => {

  //  })
  //}

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
