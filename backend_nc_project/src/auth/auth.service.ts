import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { UserService } from './user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/common/constants';
//!Falta importar el de los doctores

const saltOrRounds = 10;

@Injectable()
export class AuthService {
    constructor(
            private readonly userService: UserService,
            private jwtService: JwtService,
            ) {}

    async doctorRegister({ firstName, lastName, email, password, document, birthDate, role, schedule }: RegisterDto){

        try {
            
            const verifyUser = await this.userService.findByEmailExistent(email)
            if (verifyUser) throw new BadRequestException(`This Email is already registered`);

            const encriptedPass = await bcrypt.hash(password, saltOrRounds)
            

            const newUser = await this.userService.createDoctor({ document, password: encriptedPass, role, email, firstName, lastName, birthDate,schedule })

            return newUser

        } catch (error) {
            console.log(error);
            throw new BadRequestException(error);

        }
    }

    async login(user: LoginDto){
        try {
            
            const verifyUser = await this.userService.findByDocumentExistent(user.document)
            if (!verifyUser) throw new UnauthorizedException(`Wrong document or password`);

            const isMatch = await bcrypt.compare(user.password, verifyUser.password);
            if (!isMatch) throw new UnauthorizedException(`Wrong email or password`);

            const token = await this.jwtService.signAsync({ userId: verifyUser.document, role: verifyUser.role }, {
                secret: JWT_SECRET,
                expiresIn: '1d'
            });

            return {
                token: token,
                userId: verifyUser.id,
                role: verifyUser.role
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException('Something went wrong', error.message);
        }
    }

    async patientRegister( data : RegisterDto){
        try {


            const encriptedPass = await bcrypt.hash(data.password, saltOrRounds);
            
            const newUser = await this.userService.createPatient({ firstName: data.firstName, lastName: data.lastName, document:data.document, password: encriptedPass, role: data.role, email: data.email, birthDate: data.birthDate, healthInsurance: data.healthInsurance })

            return newUser

        } catch (error) {
            throw new BadRequestException(error);

        }
    }

}