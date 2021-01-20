import * as mongoose from 'mongoose';

export const DocumentDetailSchema = new mongoose.Schema({
  meta: Object,
  companyId: Number,
  state: String,
  queued: Object,
  processed: Object,
  archived: Object,
  stored: Object,
  error: Array,
  createdAt: Date,
  updatedAt: Date,
});
