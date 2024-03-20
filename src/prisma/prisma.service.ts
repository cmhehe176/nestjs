import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
	constructor(){
		super({
			datasources:{
				db:{url:"postgresql://postgres:3547@localhost:1234/nestjs"}
			}
		})
	}
}
