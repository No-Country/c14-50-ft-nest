import { IsEnum, MaxLength, MinLength } from "class-validator";
import { ERole } from "../../../common/enum";

export class CreateRoleDto {

    @IsEnum(ERole)
    @MaxLength(30)
    @MinLength(3)
    name: ERole;
}
