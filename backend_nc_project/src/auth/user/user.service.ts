import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationDto } from '../../common/dto/pagination.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User> ){}

    async findAll({ offset=0, limit=10 }: PaginationDto): Promise<User[]>{
        const users = await this.userRepository.find({
          take: limit,
          skip: offset
        });
    
        if (users.length === 0) {
          throw new NotFoundException("Users not found");
        }
    
        return users;
      }
    

    async findByEmailExistent(email: string): Promise<User> {
        try {
        const user = await this.userRepository.findOne({
            where: {
            email: email,
            }, 
            select: [ 'password']
        });
    
        return user;
        } catch (error) {
        throw new BadRequestException(error);
        }
    }
    
    async create(createUserDto: CreateUserDto) {
        
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

   async findByDocumentExistent(document: number): Promise<User> {
        try {

        const user = await this.userRepository.findOne({
            where: {
            document: document,
            }, 
            select: [ 'password', 'document' ]
        });

        return user;
        } catch (error) {
        throw new BadRequestException(error);
        }
    }

    async findOne(id: string): Promise<User>{
        const user = await this.userRepository.findOne({
                                            where: {id: id }
                                          });
                                          
        if (!user) {
          throw new NotFoundException(`User with Id ${id} not found`);
        }
    
        return user;
      }

      async update(id: string, updateUserDto: UpdateUserDto) {
  
        const user = await this.userRepository.update({ id }, updateUserDto);
        console.log(user)
        if (!user) {
          throw new NotFoundException(`User with Id ${id} not found`);
        }
    
        return `User with Id ${id} was successfully updated`;
      }

      async remove(id: string) {

        const user = await this.userRepository.update({ id, is_deleted: false }, {
          is_deleted: true,
        });
        
        if (user.affected !== 1) {
          throw new NotFoundException(`User with Id ${id} not found`);
        }
        
        await this.userRepository.softDelete(id);
    
        return `User with Id ${id} was successfully deleted`;
      }
}