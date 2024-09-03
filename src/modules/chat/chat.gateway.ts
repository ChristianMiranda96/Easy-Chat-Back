import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: { userId: string; content: string }) {
    // Lógica para tratar a mensagem
  }
}
