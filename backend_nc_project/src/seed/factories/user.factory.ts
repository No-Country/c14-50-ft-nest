import { setSeederFactory } from 'typeorm-extension';
import { hash } from 'bcryptjs'; 
import { User } from '../../auth/user/entities/user.entity';
import { ERole } from '../../common/enum';
import { Logger } from '@nestjs/common';


export default setSeederFactory(User, async (faker) => {
  const user = new User();
 
  const password = faker.internet.password();

  const logger = new Logger('Seed');

  user.name = faker.person.firstName();
  user.lastName = faker.person.lastName();
  user.email = faker.internet.email();
  user.password = await hash(password, 12);
  user.role = faker.helpers.arrayElement([
   ERole.SUPERADMIN,
   ERole.ADMIN
  ]);
  user.phone = {
    countryCode: '+57',
    phoneNumber: faker.phone.number()
};

logger.log('User Created Email: ', user.email);

logger.log('User Created Password: ', password);

  return user;
});