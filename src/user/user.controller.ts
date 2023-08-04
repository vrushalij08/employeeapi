import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Res,Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {Response,Request} from 'express'
import { Public } from 'src/auth/public.decorator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService:JwtService
    ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    
    const password=createUserDto.password
    const saltOrRounds=12
    const bcrptpassword = await bcrypt.hash(password,saltOrRounds);
    createUserDto.password=bcrptpassword;
    return await this.userService.create(createUserDto);
  }

  @Public()
  @Post('check')
  async check(
    @Body() obj:any,
    @Res({passthrough:true}) res:Response){
    let user=await this.userService.findOneEmail(obj.email);
    console.log("user",user);
    if(await bcrypt.compare(obj.password,(await user).password)){
    let email=obj.email
    let jwtToken = await this.jwtService.signAsync({id:email})
    // console.log(jwtToken)
    // res.cookie('jwt',jwtToken,{httpOnly:true})
    const{password,...result}=user;
    return {
      logedin:true,
      token:jwtToken,
      user:result
    }
   }else{
    throw new BadRequestException('invalid creds');
   }
  }

  @Post('logout')
  logout(@Res({passthrough:true}) res:Response){
   res.clearCookie('jwt');
   return 'logedout'
  }
  
  
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('auth/user')
  async authenticatedUser(@Req() request:Request) {
    try{
      let cookie=request.cookies['jwt']
      let verify = await this.jwtService.verifyAsync(cookie)
      return verify;
    }catch(e){
      throw new UnauthorizedException
    }
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
