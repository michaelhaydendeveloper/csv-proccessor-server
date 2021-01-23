import { getDatabaseConfig, getMongoConfigOptions, getMongoConfigUri } from '../database.config';
import { HealthController } from './health.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot(
      getMongoConfigUri(),
      getMongoConfigOptions(),
    ),
    TypeOrmModule.forRoot(getDatabaseConfig()),
    TerminusModule,
    // VersionModule,
  ],
  controllers: [HealthController],
})
export class HealthModule {}