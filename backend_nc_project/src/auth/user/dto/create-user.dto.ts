import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength, IsEmail, MaxLength, IsObject, IsEnum, IsOptional} from "class-validator";
import { ERole, Gender } from "../../../common/enum";

export class CreateUserDto {

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
    birthdate: string;

    @IsOptional()
    @IsString()
    phone?: string;
    
    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;

    @IsEnum(ERole)
    role: ERole;
    
}