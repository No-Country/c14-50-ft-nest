import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength, IsEmail, MaxLength, IsObject, IsEnum, IsOptional} from "class-validator";
import { Phone } from "../../common/interface";
import { ERole, Gender } from "src/common/enum";

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