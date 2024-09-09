import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageService } from '../message/message.service';

@WebSocketGateway({ cors: true }) 
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() data: { userId: string; content: string }) {
    const message = await this.messageService.createMessage(data.userId, data.content);
    this.server.emit('message', message);
  }

  @SubscribeMessage('getMessages')
  async handleGetMessages() {
    const messages = await this.messageService.findMessages();
    this.server.emit('messages', messages);
  }
}
