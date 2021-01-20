import { DocumentRawSchema } from './documentRaw.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DocumentRaw', schema: DocumentRawSchema }])
  ],
})
export class DocumentRawModule {}
