import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
//trong prismamodule có prismaservice ( có chứa hàm để liên kết db )=> chỉ cần khai báo 1 lần là ref thoải mái
@Module({
  imports:[PrismaModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
