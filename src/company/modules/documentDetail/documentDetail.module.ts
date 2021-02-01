import { DocumentDetailSchema } from './documentDetail.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DocumentDetail', schema: DocumentDetailSchema }]),
  ],
})
export class DocumentDetailModule {}
