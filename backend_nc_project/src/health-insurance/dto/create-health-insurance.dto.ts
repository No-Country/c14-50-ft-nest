
import { IsOptional, IsString } from "class-validator"
export class CreateHealthInsurance {

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    patients: string[];

    @IsOptional()
    @IsString()
    doctors: string[];
}