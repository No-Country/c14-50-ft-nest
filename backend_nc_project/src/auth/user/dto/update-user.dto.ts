import { PartialType } from "@nestjs/mapped-types";
import { CreateRoleDto } from "../../../auth/role/dto/create-role.dto";


export class UpdateUserDto extends PartialType(CreateRoleDto) {}