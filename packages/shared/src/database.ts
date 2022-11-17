
import createConnectionPool, {sql} from '@databases/mysql';
import tables from '@databases/mysql-typed';
import DatabaseSchema, {serializeValue} from './__generated__';

export {sql};

const db = createConnectionPool();
export default db;

// You can list whatever tables you actually have here:
const {links} = tables<DatabaseSchema>({
  serializeValue,
});

export {links};