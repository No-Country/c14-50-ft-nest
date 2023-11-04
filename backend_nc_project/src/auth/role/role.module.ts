import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { JwtModule } from '@nestjs/jwt';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role]), JwtModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
