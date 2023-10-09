import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { UserService } from './user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
    constructor(
            private readonly userService: UserService,
             private jwtService: JwtService
            ) {}


    async register(user: RegisterDto){
        try {
            const verifyUser = await this.userService.findByEmailExistent(user.email)
            if (verifyUser) throw new BadRequestException(`This Email is already registered`);

            const hash = await bcrypt.hash(user.password, saltOrRounds)

            const newUser = await this.userService.create({
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                document: user.document,
                password: hash,
                birthdate: user.birthdate,
                gender: user.gender
            })
            return newUser.name

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

            const token = this.jwtService.sign({ userId: verifyUser.document})
            return {
            token
            }
        } catch (error) {
            
        }
    }
}
