import * as mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

export const DocumentProcessedSchema = new mongoose.Schema({
  documentDetailId: {
    type: ObjectID,
    ref: 'DocumentDetail'
  },
  data: Object,
  state: String,
  error: Array,
  meta: Object,
  version: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('DocumentProcessed',DocumentProcessedSchema);
