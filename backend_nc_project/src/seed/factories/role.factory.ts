import { setSeederFactory } from 'typeorm-extension';

import { Role } from '../../auth/role/entities/role.entity';
import { ERole } from '../../common/enum';


export default setSeederFactory(Role, async (faker) => {
  const role = new Role();
 
  role.name = faker.helpers.arrayElement([
    ERole.SUPERADMIN,
    ERole.PATIENT,
    ERole.ADMIN,
    ERole.DOCTOR
  ]);

  return role;
});