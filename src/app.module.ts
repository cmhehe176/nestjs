import { Module } from "@nestjs/common";
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({

  imports: [
    StudentModule,
    ClassModule, 
    TeacherModule, 
    SubjectModule, 
    AuthModule, 
    PrismaModule]
})

export class AppModule{}