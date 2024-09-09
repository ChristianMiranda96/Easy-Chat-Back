import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.interface';

@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

  async createMessage(userId: string, content: string): Promise<Message> {
    const newMessage = new this.messageModel({ userId, content });
    return newMessage.save();
  }

  async findMessages(): Promise<Message[]> {
    return this.messageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findMessagesByUserId(userId: string): Promise<Message[]> {
    return this.messageModel.find({ userId }).sort({ createdAt: -1 }).exec();
  }
}
