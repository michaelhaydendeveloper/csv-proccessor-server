import { DocumentProcessedSchema } from './documentProcessed.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DocumentProcessed', schema: DocumentProcessedSchema }])
  ],
})
export class DocumentProcessedModule {}
