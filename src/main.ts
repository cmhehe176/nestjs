import { NestFactory} from '@nestjs/core'
import { AppModule } from './app.module'

let begin = async()=>{
  let app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
begin()