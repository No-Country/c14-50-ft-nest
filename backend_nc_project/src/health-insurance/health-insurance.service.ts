import { Injectable } from '@nestjs/common';
import { HealthInsurance } from './entity/health-insurance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHealthInsurance } from './dto/create-health-insurance.dto';
import { UpdateHealthInsurance } from './dto/update-health-insurance .dto';
import { Repository } from 'typeorm';

@Injectable()
export class HealthInsuranceService {
    constructor(
        @InjectRepository(HealthInsurance)
        private readonly healthInsuranceRepository:Repository<HealthInsurance>
      ){}
    
      async create(createHealthInsurance: CreateHealthInsurance) {
        return await this.healthInsuranceRepository.save(createHealthInsurance);
      }
    
      async findAll() {
        return await this.healthInsuranceRepository.find();
      }
    
      async findHealthInsuranceById(id:string) {
        const healthInsurance = await this.healthInsuranceRepository.find({where:{id}});
        if(!healthInsurance) throw new Error('Health Insurance not found');
        return healthInsurance;
      }
    
      async update(id: string, updateHealthInsurance: UpdateHealthInsurance) {
        const healthInsurance = await this.healthInsuranceRepository.findOneBy({id});
        if(!healthInsurance) throw new Error('Health Insurance not found');
        return await this.healthInsuranceRepository.update(id, updateHealthInsurance);
      }
    
      async remove(id: string) {
        const healthInsurance = await this.healthInsuranceRepository.findOneBy({id});
        if(!healthInsurance) throw new Error('Health Insurance not found');
        await this.healthInsuranceRepository.delete(id);
        return healthInsurance;
      }
}
