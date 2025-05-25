import { Injectable } from '@nestjs/common';
import { user_types_validation } from './dto/create-user_type.dto';
import * as z from 'zod'
import { ServiceModel } from 'src/serviceModel';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserTypesService extends ServiceModel{

  constructor(protected readonly prisma: PrismaService){
    super(prisma)
  }

  async create(createUserTypeDto:  z.infer<typeof user_types_validation>) {

    this.validate(createUserTypeDto, user_types_validation);

    const user_type = await this.prisma.user_types.create({
      data: {
        name: createUserTypeDto.name
      }
    })

    return user_type;

  }

  async findAll() {
    return await this.prisma.user_types.findMany(); 
  }

  async findOne(id: string) {
    return await this.prisma.user_types.findFirst({
      where: {
        id: id
      }
    })
  }

  async update(id: string, updateUserTypeDto: z.infer<typeof user_types_validation>) {
    
    this.validate(updateUserTypeDto, user_types_validation);

    return await this.prisma.user_types.update({
      where:{
        id: id
      },
      data: {
        name: updateUserTypeDto.name
      }
    })

  }

  async remove(id: string) {
    
    return await this.prisma.user_types.delete({
      where:{
        id: id
      }
    }) 

  }
}
