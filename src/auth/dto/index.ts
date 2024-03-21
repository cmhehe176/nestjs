// quy định kiểu dữ liệu khi truyền , nhận data

import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { interval } from "rxjs"
import internal from "stream"

export class AuthDTO{
	@IsEmail()
	@IsNotEmpty()
	email: string

	@IsNotEmpty()
	@IsString()
	password: string

	@IsNotEmpty()
	name: string
	
	@IsString()
	address: string
}