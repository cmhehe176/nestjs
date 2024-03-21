import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
//khai báo global để dùng tất cả mọi nơi
//=> tất cả nơi nào liên quan đến csdl thì dùng global
@Global()
@Module({
  imports: [ConfigModule],
  providers: [PrismaService],
  exports:[PrismaService]
})
export class PrismaModule {}
