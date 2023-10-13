import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common"
import { ROLES_KEY } from "./role.decorator";
import { ERole } from "../enum";
import { AuthGuard } from "../guards/auth.guard";
import { RolesGuard } from "../guards/role.guard";

export const Auth = (...roles: ERole[]) => {
    
    return applyDecorators(
        SetMetadata(ROLES_KEY, roles),
        UseGuards(AuthGuard, RolesGuard),
    )
}