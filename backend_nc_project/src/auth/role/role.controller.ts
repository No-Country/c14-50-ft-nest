import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { Auth } from '../../common/decorator/auth.decorator';
import { ERole } from '../../common/enum';

@Auth(ERole.SUPERADMIN)
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.roleService.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete()
  remove(@Param() id: string) {
    return this.roleService.remove(id);
  }
}
