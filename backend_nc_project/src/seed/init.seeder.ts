import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
import { dataSource } from './config/database';
import RoleSeeder from './seeder/role.seeder';
import UserSeeder from './seeder/user.seeder';
import RoleFactory from './factories/role.factory';
import userFactory from './factories/user.factory';

(async () => {
    const options: DataSourceOptions = await dataSource() as DataSourceOptions;

    const dataSourceSeed = new DataSource(options);
    await dataSourceSeed.initialize();

    await runSeeders(dataSourceSeed, {
        seeds: [RoleSeeder, UserSeeder],
        factories: [RoleFactory, userFactory]
    });
})();