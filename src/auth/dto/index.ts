// quy định kiểu dữ liệu khi truyền , nhận data

import { IsEmail, IsNotEmpty, IsString } from "class-validator"

// export class AuthDTO{

// 	email: string


// 	password: string

	
// 	name: string
	
	
// 	address: string
// }
export interface AuthDTO{

	email: string


	password: string

	
	name: string
	
	
	address: string
}