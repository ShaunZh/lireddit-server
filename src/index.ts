import { MikroORM, Options } from '@mikro-orm/core'
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { __prod__ } from './constants';


const config: Options  = {
    entities: [],
    dbName: 'lireddit_server',
    driver: PostgreSqlDriver,
    debug: !__prod__,
}

const main = async () => {
    const orm = await MikroORM.init(config)
}

main();
