import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentProcessorService {
  storeDocuments() {
    return Promise.resolve(undefined);
  }

  archiveDocuments() {
    return Promise.resolve(undefined);
  }

  processDocuments() {
    return Promise.resolve(undefined);
  }

  queueDocuments() {
    return Promise.resolve(undefined);
  }
}