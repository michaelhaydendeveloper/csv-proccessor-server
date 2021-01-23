import { getDatabaseConfig, getMongoConfigOptions, getMongoConfigUri } from './database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { DocumentDetailModule } from './documentDetail/documentDetail.module';
import { DocumentProcessedModule } from './documentProcessed/documentProcessed.module';
import { DocumentRawModule } from './documentRaw/documentRaw.module';
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
    DocumentDetailModule,
    DocumentProcessedModule,
    DocumentRawModule,
    CompanyModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}