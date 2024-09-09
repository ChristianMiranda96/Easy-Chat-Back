import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://christianmiranda610:Chris87048456@chateasy.9hjir.mongodb.net/ChatEasy?retryWrites=true&w=majority&appName=ChatEasy'), // Conexão com MongoDB
    UserModule,
    MessageModule,
  ],
})
export class AppModule {}
