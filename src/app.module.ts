import { Module } from "@nestjs/common";
import { StudentModule } from './module/student/student.module';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config";

@Module({

  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    StudentModule,
    AuthModule, 
    PrismaModule]
})

export class AppModule{}