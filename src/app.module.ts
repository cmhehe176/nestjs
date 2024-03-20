import { Module } from "@nestjs/common";
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { TeacherModule } from './teacher/teacher.module';
import { SubjectModule } from './subject/subject.module';

@Module({
	

  imports: [StudentModule, ClassModule, TeacherModule, SubjectModule]
})

export class AppModule{}