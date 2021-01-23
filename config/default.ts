import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 6433,
    username: process.env.DB_USERNAME || 'dev',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE || 'csv_processor',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    logging: process.env.DB_LOGGING || true,
    ssl: process.env.DB_USE_SSL === 'true' ? { rejectUnauthorized: false } : false,
    synchronize: false,
    migrations: ['migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'migrations',
    },
    seeds: ['src/database/seeds/**/*.seed.ts'],
    factories: ['src/database/factories/**/*.factory.ts'],
  },
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://dev:password123@localhost:27018/CsvProcessor',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    },
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
  environment: process.env.ENV_NAME,
  sftp: {
    host: process.env.SFTP_HOST || '127.0.0.1',
    port: process.env.SFTP_PORT || 9923,
  },
};
