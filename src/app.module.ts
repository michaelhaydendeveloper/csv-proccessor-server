import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentDetailModule } from './documentDetail/documentDetail.module';
import { DocumentProcessedModule } from './documentProcessed/documentProcessed.module';
import { DocumentRawModule } from './documentRaw/documentRaw.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://dev:password123@localhost:27018/CsvProcessor',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6433,
      username: 'dev',
      password: 'password123',
      database: 'csv_processor',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    DocumentDetailModule,
    DocumentProcessedModule,
    DocumentRawModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}