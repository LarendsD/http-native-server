import pg from 'pg';

export default new pg.Client({
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
});
