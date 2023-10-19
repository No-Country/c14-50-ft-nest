import { IsString, MinLength } from "class-validator"
export class UpdateAppointmentDto {
    
    @IsString()
    @MinLength(3)
    doctor: string;

    @IsString()
    @MinLength(3)
    especiality: string;

    @IsString()
    @MinLength(3)
    birthDate:string;

    @IsString()
    @MinLength(3)
    hour: string;

    @IsString()
    @MinLength(3)
    interval:string;

    @IsString()
    user: string;

}