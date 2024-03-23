import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';//khi maf import den folder thi se auto read file index dau tien 


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    //nhung request tu ben client
    //dang ky
    @Post("register")
    register(@Body() authDTO: AuthDTO){
        return this.authService.register(authDTO)
    }

    //dang nhap
    // @Post("login")
    // login(@Body() authDTO: AuthDTO){
    //     return this.authService.login(authDTO)
    // }



}
