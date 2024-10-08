import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './message.schema';
import { ChatGateway } from '../chat/chat.gateway';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  providers: [MessageService, ChatGateway],
  controllers: [MessageController],
})
export class MessageModule {}
