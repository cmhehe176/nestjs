import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import { Prisma, Student } from '@prisma/client';
@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		){}
	//input:Prisma.StudentWhereUniqueInput
    //output: Promise<Student | null>
// Kiểu Prisma.StudentWhereUniqueInput là một giao diện trong TypeScript được định nghĩa bởi Prisma client. Nó mô tả cấu trúc của đối tượng được sử dụng để xác định duy nhất một học sinh trong cơ sở dữ liệu Prisma.
    async student(
        studentWhereUniqueInput: Prisma.StudentWhereUniqueInput,
      ): Promise<Student | null> {
        return this.prisma.student.findUnique({
          where: studentWhereUniqueInput,
        });
      }

       async students(params: {
            skip?: number;
            take?: number;
            cursor?: Prisma.StudentWhereUniqueInput;
            where?: Prisma.StudentWhereInput;
            orderBy?: Prisma.StudentOrderByWithRelationInput;
  }): Promise<Student[]> {
            const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.student.findMany({
                    skip,
                    take,
                    cursor,
                    where,
                    orderBy,
    });
  }

  async createStudent(data: Prisma.StudentCreateInput): Promise<Student> {
    return this.prisma.student.create({
      data:{
        name: data.name
      },
    });
  }
  async updateStudent(params: {
    where: Prisma.StudentWhereUniqueInput;
    data: Prisma.StudentUpdateInput;
  }): Promise<Student> {
    const { where, data } = params;
    return this.prisma.student.update({
      data,
      where,
    });
  }

  async deleteStudent(where: Prisma.StudentWhereUniqueInput): Promise<Student> {
    return this.prisma.student.delete({
      where,
    });
  }


     register = async(authDTO: AuthDTO)=>{
        try{
    await this.prisma.student.create({
                data:{
                    email: authDTO.email, 
                    address: authDTO.address,
                    password: authDTO.password,
                    name: authDTO.name,
                },
                select:{
                    id: true,
                    email: true,
                    address: true,
                }
            })
        }catch(e){
            console.log(e)
        }
    }
    // async update(param:{
    //     where
    // }){

    // }
}     
    