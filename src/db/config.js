import pg from 'pg';

export default new pg.Client({
  connectionString: process.env.DATABASE_URL,
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'postgres',
  database: process.env.PGDATABASE || 'postgres',
});
