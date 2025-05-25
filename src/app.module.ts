import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypesModule } from './user_types/user_types.module';

@Module({
  imports: [UserTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
