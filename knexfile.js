module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'midterm',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
