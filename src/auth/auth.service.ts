import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
	constructor(private prismaService: PrismaService){}
	register(){
		return {
			message:"Register"
		}
	}
	login(){
		return {
			message:"login"
		}
	}
}
