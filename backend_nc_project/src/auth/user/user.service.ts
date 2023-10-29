import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { DoctorService } from '../../doctor/doctor.service';
import { PatientService } from 'src/patients/patients.service';


@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>, 
      private readonly doctorService: DoctorService,
      private readonly patientService: PatientService,
      ){}

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
            select: ['password',"id","email"]
        });
    
        return user;
        } catch (error) {
        throw new BadRequestException(error);
        }
    }
    
    async createDoctor({ email, document, password, role, firstName, lastName, phone, birthDate, schedule, specialties, registrationNumber, gender }: CreateUserDto) {
        
      try {
        
        const {doctor} = await this.doctorService.create({
          firstName,
          lastName,
          birthDate,
          phone,
          schedule,
          specialties,
          gender,
          registrationNumber
        })
        
        const user = this.userRepository.create({ email, password, document, role, doctor });
    
        await this.userRepository.save(user);
  
        return doctor;

      } catch (error) {
        console.error(error);
      }
  }

  async createPatient(createUserDto: CreateUserDto) {
        
    try {
      
      const patient = await this.patientService.create({
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        birthDate: createUserDto.birthDate,
        phone: createUserDto.phone,
        healthInsurance: createUserDto.healthInsurance,
      });
  
      const user = this.userRepository.create({ email: createUserDto.email, password: createUserDto.password, document: createUserDto.document, role:createUserDto.role, patient});
  
      await this.userRepository.save(user);
  
      return patient;

    } catch (error) {
      console.error(error);
    }
  }

   async findByDocumentExistent(document: number): Promise<User> {
        try {

        const user = await this.userRepository.findOne({
            where: {
            document: document,
            },
            select: [ 'password', 'document',"id" ]
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
