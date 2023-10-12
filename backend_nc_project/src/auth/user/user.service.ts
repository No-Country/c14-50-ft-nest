import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';
import CreateUserDto from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User> ){}

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
    
    async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

   async findByDocumentExistent(document: number): Promise<User> {
        try {
        const user = await this.userRepository.findOne({
            where: {
            document: document,
            }, 
            select: [ 'password']
        });
    
        return user;
        } catch (error) {
        throw new BadRequestException(error);
        }
    }
}
