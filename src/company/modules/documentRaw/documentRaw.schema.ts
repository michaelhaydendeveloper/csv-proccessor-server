import * as mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

export const DocumentRawSchema = new mongoose.Schema({
  documentDetailId: {
    type: ObjectID,
    ref: 'DocumentDetail',
  },
  data: [{}],
  error: [{
    message: String,
    stackTrace: {},
    createdAt: Date,
  }],
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('DocumentRaw',DocumentRawSchema);
