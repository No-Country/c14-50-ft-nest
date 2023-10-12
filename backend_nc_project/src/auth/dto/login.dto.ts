import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength} from "class-validator";

export default class LoginDto {

    @Transform(({value}) => Number(value))
    @IsNumber()
    document: number;

    @IsString()
    @MinLength(6)
    password: string;

}