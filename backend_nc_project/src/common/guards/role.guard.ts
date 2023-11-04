import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ERole } from '../enum';
import { ROLES_KEY } from '../decorator/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean {

    const roles: ERole[] = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getClass(),
      context.getHandler()
    ]);

    const { user } = context.switchToHttp().getRequest();

    return roles.some(role  => (role === user.role || user.role === ERole.SUPERADMIN));
  }
}