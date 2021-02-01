import { getDatabaseConfig, getMongoConfigOptions, getMongoConfigUri } from './database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { HealthModule } from './health/health.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot(
      getMongoConfigUri(),
      getMongoConfigOptions(),
    ),
    TypeOrmModule.forRoot(getDatabaseConfig()),
    CompanyModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}