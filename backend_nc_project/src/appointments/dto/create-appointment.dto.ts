
import { IsString } from "class-validator"
export class CreateAppointmentDto {

    @IsString()
    day: string
    
    @IsString()
    interval: string

    @IsString()
    doctor: string

    @IsString()
    specialty:string

    @IsString()
    patient: string 

}