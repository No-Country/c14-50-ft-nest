import { ConfigModule } from '@nestjs/config';
import { Role } from '../../auth/role/entities/role.entity';
import { User } from '../../auth/user/entities/user.entity';

ConfigModule.forRoot({
  isGlobal: true,
});

export const dataSource = async () => {
  return {
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'ferwin',
    password: 'root',
    database: 'nc_project',
    autoLoadEntities: true,
    entities: [User, Role],
    synchronize: true,
  };
};
