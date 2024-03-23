import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';
import { Student } from '@prisma/client';
@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		){}
	//
     register = async(authDTO: AuthDTO)=>{
        try{
    await this.prismaService.student.create({
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
    async update(param:{
        where
    }){

    }
}     
    