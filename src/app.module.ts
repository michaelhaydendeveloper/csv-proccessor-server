import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import {BatchModule} from "./batch/batch.module";

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
    FileModule,
    BatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}