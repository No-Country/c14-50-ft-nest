import { Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';

@Injectable()
export class AuthService {

    async register(registerDto: RegisterDto){
        return registerDto
    }

    async login(loginDto: LoginDto){
        return loginDto
    }
}
