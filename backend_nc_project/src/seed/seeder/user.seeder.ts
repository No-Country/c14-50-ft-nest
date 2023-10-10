import { hash } from 'bcryptjs';
import { User } from '../../auth/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ERole } from '../../common/enum';
import { Gender } from 'src/common/enum';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {

    const user = {
        name: 'Ferwin',
        lastName: 'Arias',
        document: 123456,
        password: await hash('Secret123', 12),
        email: 'ferwin@admin.com',
        gender: Gender.MASCULINO,
        phone: {
                countryCode: '+57',
                phoneNumber: '3003333333'
                },
        role: ERole.SUPERADMIN,
    }

    const repository = dataSource.getRepository(User);

    
    const userToInsert = await repository.findOneBy({ email: user.email });
    
    // Insert only one record with this name.
    if (!userToInsert) {
        await repository.insert([user]);
    }

    // ---------------------------------------------------
    // This is the factory function execution, not needed in this case.

    const userFactory = await factoryManager.get(User);

        // save 1 factory generated entity, to the database
        await userFactory.save();

        // save 5 factory generated entities, to the database
        await userFactory.saveMany(2);
  }

}