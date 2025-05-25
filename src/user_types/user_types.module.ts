import { Module } from '@nestjs/common';
import { UserTypesService } from './user_types.service';
import { UserTypesController } from './user_types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserTypesController],
  providers: [UserTypesService, PrismaService],

})
export class UserTypesModule {}
