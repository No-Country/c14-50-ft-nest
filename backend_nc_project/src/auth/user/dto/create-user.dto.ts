import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength, IsEmail, MaxLength, IsObject, IsEnum, IsOptional} from "class-validator";
import { Phone } from "../../../common/interface";
import { Gender } from "src/common/enum";

export default class CreateUserDto {

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    name: string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    lastname: string;

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

    // @IsOptional()
    // @IsObject()
    // phone?: Phone;
    
    @IsOptional()
    @IsEnum(Gender)
    gender?: Gender;
    
}