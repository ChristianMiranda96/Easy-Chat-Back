import { Controller, Post, Body, BadRequestException, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../chat/DTO/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('test')
  async test() {
    return 'Teste';
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const isValidAge = await this.userService.validateUserAge(createUserDto.age);
    if (!isValidAge) {
      throw new BadRequestException('Idade mínima é 18 anos.');
    }
    return this.userService.createUser(createUserDto);
  }
}