import {Controller, Get} from '@nestjs/common';
import { DocumentProcessorService } from './documentProcessor.service';

@Controller('company/document')
export class DocumentProcessorController {
  constructor(
    private documentProcessorService: DocumentProcessorService
  ) {}
  
  /**
   * Trigger queueing documents
   * 1. Get documents from their location (i.e. SFTP Server)
   * 2. Add Document details (file meta info) into documentDetails Table
   *    a. Each doc's state=QUEUED
   * 3. Transform Document content in JSON object
   * 4. Loads documentJSON object into documentRaw Mongo Table
   *    a. Each row item should be State=QUEUED
   */
  @Get('/queue')
  async queueDocument() {
    console.log('DocumentProcessorController :: queue');
    return this.documentProcessorService.queueDocuments();
  }

  /**
   * trigger processing documents
   */
  @Get('/process')
  async processDocument() {
    console.log('DocumentProcessorController :: process');
    return this.documentProcessorService.processDocuments();
  }

  /**
   * Trigger archiving Documents
   */
  @Get('/archive')
  async archiveDocument() {
    console.log('DocumentProcessorController :: archive');
    return this.documentProcessorService.archiveDocuments();
  }

  /**
   * Trigger sending Documents to storage (i.e. S3 bucket)
   */
  @Get('/storage')
  async storageDocument() {
    console.log('DocumentProcessorController :: storage');
    return this.documentProcessorService.storeDocuments();
  }
}
