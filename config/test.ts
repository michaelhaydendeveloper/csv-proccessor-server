export default {
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST_TEST || 'localhost',
    port: process.env.DB_PORT_TEST || 5432,
    username: process.env.DB_USERNAME_TEST || 'dev',
    password: process.env.DB_PASSWORD_TEST || 'password123',
    database: process.env.DB_DATABASE_TEST || 'csv_processor_test',
    logging: process.env.DB_LOGGING_TEST || false,
    migrationsRun: true,
    keepConnectionAlive: true,
    autoLoadEntities: true,
  },
};
