import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';
import { DocumentDetailModule } from './modules/documentDetail/documentDetail.module';
import { DocumentProcessedModule } from './modules/documentProcessed/documentProcessed.module';
import { DocumentProcessorModule } from './modules/documentProcessor/documentProcessor.module';
import { DocumentRawModule } from './modules/documentRaw/documentRaw.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyRepository]),
    DocumentDetailModule,
    DocumentProcessedModule,
    DocumentProcessorModule,
    DocumentRawModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})

export class CompanyModule {}