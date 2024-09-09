import { Controller, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('user/:userId')
  async getUserMessages(@Param('userId') userId: string) {
    return await this.messageService.findMessagesByUserId(userId);
  }
}
