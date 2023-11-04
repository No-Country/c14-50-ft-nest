import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private readonly roleRepository: Repository<Role>){}
  
  async create(createRoleDto: CreateRoleDto) {

    const role = this.roleRepository.create(createRoleDto);

    return await this.roleRepository.save(role);
  }

  async findAll({offset=0 ,limit=10}: PaginationDto): Promise<Role[]> {
    return await this.roleRepository.find({
      take: limit,
      skip: offset
    });
  }
  
  async findOne(id: string): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: {id}});

    if (!role) {
      throw new NotFoundException(`Role with Id ${id} not found`);
    }

    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const role = await this.roleRepository.update({ id }, updateRoleDto);

    if (!role) {
      throw new NotFoundException(`Role with Id ${id} not found`);
    }

    return `Role with Id ${id} was successfully updated`;
  }

  async remove(id: string) {
    
    const role = await this.roleRepository.update({ id, is_deleted: false }, {
      is_deleted: true,
    });
    
    if (role.affected !== 1) {
      throw new NotFoundException(`User with Id ${id} not found`);
    }
    
    await this.roleRepository.softDelete(id);

    return `Role with Id ${id} was successfully deleted`;
  }
}