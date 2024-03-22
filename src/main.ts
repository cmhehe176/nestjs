import { NestFactory} from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationTypes } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();
//cruise
const port = process.env.PORT
const begin = async()=>{
const app = await NestFactory.create(AppModule)
 //cau hinh dinh dangj cua data toan bo project
  app.useGlobalPipes( new ValidationPipe())
  await app.listen(port,()=>{
    console.log('localhost:'+port)
  })
}
begin()
