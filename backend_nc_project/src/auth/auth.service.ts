import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { UserService } from './user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/common/constants';
import { PatientsService } from 'src/patients/patients.service';
//!Falta importar el de los doctores

const saltOrRounds = 10;

@Injectable()
export class AuthService {
    constructor(
            private readonly userService: UserService,
            private jwtService: JwtService,
            private readonly patientService:PatientsService
            ) {}

    async doctorRegister({ firstName, lastName, email, password, document, birthDate, gender, role }: RegisterDto){

    async register( data : RegisterDto){
        try {
            
            const verifyUser = await this.userService.findByEmailExistent(data.email)
            if (verifyUser) throw new BadRequestException(`This Email is already registered`);
            if (data.document <= 99999) throw new BadRequestException("document must be longer than or equal to 6 characters");


            const encriptedPass = await bcrypt.hash(data.password, saltOrRounds);

            if (data.role === "patient"){
                await this.patientService.create({...data,password: encriptedPass})
                console.log("SE CREO EL PACIENTE");
            } else{
                //await this.doctorService.create({...})
            }
            

            console.log("Intentando guardar las credenciales en user table");
            const newUser = await this.userService.create({document:data.document, password: encriptedPass, role: data.role, email: data.email})
            console.log("GUARDADO!");

            return newUser

        } catch (error) {
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
            throw new BadRequestException('Something went wrong', error.message);
        }
    }

    async register( data : RegisterDto){
        try {
            
            const verifyUser = await this.userService.findByEmailExistent(data.email)
            if (verifyUser) throw new BadRequestException(`This Email is already registered`);
            // if (data.document <= 99999) throw new BadRequestException("document must be longer than or equal to 6 characters");

            const encriptedPass = await bcrypt.hash(data.password, saltOrRounds);

            return await this.patientService.create({...data,password: encriptedPass})
          
        } catch (error) {

        }
    }

}