import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register/doctor')
        async doctorRegister(@Body() registerDto: RegisterDto){
            return await this.authService.doctorRegister(registerDto)
        }

    @Post('register/patient')
        async patientRegister(@Body() registerDto: RegisterDto){
            return await this.authService.patientRegister(registerDto)
        }
    
    @Post('login')
        async login(@Body() loginDto: LoginDto){
            return await this.authService.login(loginDto)
        }
}
