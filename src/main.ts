import { NestFactory} from '@nestjs/core'
import { AppModule } from './app.module'
require('dotenv').config();

let port = process.env.PORT
let begin = async()=>{
  let app = await NestFactory.create(AppModule)
  await app.listen(port)
}
begin()
