import { HttpException, HttpStatus } from "@nestjs/common";

import * as z from 'zod'
import { PrismaClient } from "@prisma/client";


class ServiceModel{
    constructor(protected readonly prisma: PrismaClient){}

      validate(data: any, schema: z.ZodObject<any>){
    
        console.log(data)
    
        try{
          schema.parse(data)
        }catch(error){
          if (error instanceof z.ZodError) {
            console.error(error);
            throw new HttpException({message:'Erro de validação', error: error.errors}, HttpStatus.BAD_REQUEST)
          }
        }
    
      }
}

export {ServiceModel}