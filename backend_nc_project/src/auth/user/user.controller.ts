import { Controller, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {

      const { document, password, role } = createUserDto;

    return this.userService.create(createUserDto);
  }
}
