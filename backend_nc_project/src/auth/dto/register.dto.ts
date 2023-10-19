import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength, IsEmail, MaxLength, IsEnum, IsOptional, IsArray} from "class-validator";
import { ERole, Gender } from "src/common/enum";
import { Specialtie } from "src/specialties/entities/specialtie.entity";

export default class RegisterDto {

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    firstName: string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    lastName: string;

    @IsEmail()
    email:string;

    @Transform(({value}) => Number(value))
    @IsNumber()
    document: number;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    birthDate: string;

    @IsOptional()
    @IsString()
    phone?: string;
    
    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @IsEnum(ERole)
    role: ERole;

    @IsString()
    @IsOptional()
    healthInsurance?:string

    @IsOptional()
    @IsArray()
    schedule?: string[];

    @IsOptional()
    speciality?:Specialtie[];

}