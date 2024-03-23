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
    }
}
