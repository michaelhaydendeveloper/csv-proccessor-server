import { DocumentProcessorController } from './documentProcessor.controller';
import { DocumentProcessorService } from './documentProcessor.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [
    DocumentProcessorController,
  ],
  providers: [
    DocumentProcessorService,
  ],
})

export class DocumentProcessorModule {}