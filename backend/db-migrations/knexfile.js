import 'dotenv/config';

export default {
  development: {
    client: 'pg',
    searchPath: ['todos', 'public'],
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    pool: { min: 0, max: 2 },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
      stub: 'migrationTemplate.stub',
    }
  }
}