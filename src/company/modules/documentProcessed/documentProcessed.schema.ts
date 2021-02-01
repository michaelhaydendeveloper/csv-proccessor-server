import * as mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

export const DocumentProcessedSchema = new mongoose.Schema({
  documentDetailId: {
    type: ObjectID,
    ref: 'DocumentDetail'
  },
  data: Object,
  state: {
    type: String,
    default: 'QUEUED',
    enum: ['QUEUED', 'PROCESSING', 'PROCESSED', 'ARCHIVING', 'ARCHIVED', 'STORING', 'STORED'],
  },
  history: {
    queued:{
      start: {
        type: Date,
        default: new Date(),
      },
      end: Date,
    },
    processed:{
      start: Date,
      end: Date,
    },
    archived:{
      start: Date,
      end: Date,
    },
    stored:{
      start: Date,
      end: Date,
    },
  },
  error: [{
    message: String,
    stackTrace: {},
    createdAt: Date,
  }],
  meta: Object,
  version: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('DocumentProcessed',DocumentProcessedSchema);
