import { setSeederFactory } from 'typeorm-extension';
import { hash } from 'bcryptjs'; 
import { User } from '../../auth/user/entities/user.entity';
import { ERole } from '../../common/enum';
import { Logger } from '@nestjs/common';


export default setSeederFactory(User, async (faker) => {
  const user = new User();
 
  const password = faker.internet.password();

  const logger = new Logger('Seed');
  user.email = faker.internet.email();
  user.document = faker.number.int({ min: 9999999, max: 9999999999 });
  user.password = await hash(password, 12);
  user.role = faker.helpers.arrayElement([
   ERole.SUPERADMIN,
   ERole.ADMIN
  ]);

logger.log('User Created Email: ', user.email);

logger.log('User Created Password: ', password);

  return user;
});