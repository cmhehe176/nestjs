import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2'
import { AuthDTO } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		private jwtService: JwtService,
		private configService: ConfigService,
		){}


	async signJwtToken(studentId: number, email: string):Promise<{accessToken: string}>{
        const payload = {
            sub: studentId,email
        }
        const jwtString = await this.jwtService.signAsync(payload, {
            expiresIn: '10m',
            secret: this.configService.get('JWT_SECRET')
        })
        return {
            accessToken: jwtString,
        }
    }

	async register(authDTO: AuthDTO){
		const hashpassword = await argon.hash(authDTO.password)
		try{
			const student = await this.prismaService.student.create({
				data: {
					email: authDTO.email,
					password: hashpassword,
					name: authDTO.name,
					address: authDTO.address,
				},
				select:{
					id:true,
					email:true,
					name:true,
					address:true,
				}
			})
			return await this.signJwtToken(student.id, student.email)
		}catch(e){
			console.log(e)
		}
	}

	async login(authDTO: AuthDTO){        
        
        const student = await this.prismaService.student.findUnique({
                            where: {
                                email: authDTO.email
                            }
                        })
        if(!student) {
            throw new ForbiddenException(
                'Ko co student'
            )
        }   
        const passwordMatched = await argon.verify(student.password,
            authDTO.password
        )    
        if(!passwordMatched) {
            throw new ForbiddenException(
                'sai mk'
            )
        }        
        delete student.password      
        return await this.signJwtToken(student.id, student.email)        
    }
}
///sdfasdfasdfsadfsdf