import { Document } from 'mongoose';

export interface Message extends Document {
  userId: string;
  content: string;
  createdAt: Date;
}
