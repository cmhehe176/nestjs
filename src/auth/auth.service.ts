import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2'
import { AuthDTO } from './dto';
@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		
		){}
	//
    async register(authDTO: AuthDTO){
        const hashpassword = await argon.hash(authDTO.password)
        let student = await this.prismaService.student.create({
            data:{
                email: authDTO.email,
                name: authDTO.name,
                address: authDTO.address,
                password: hashpassword,
            }
           
        })
        console.log(student)
    }
    
}
