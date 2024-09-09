import { Schema } from 'mongoose';

export const MessageSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Message extends Document {
  userId: string;
  content: string;
  createdAt: Date;
}