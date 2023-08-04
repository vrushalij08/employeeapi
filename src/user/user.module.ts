import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret:'secret', //should be complex and out side src in contsant file
      signOptions:{
        expiresIn:'1d'
      }
    })],
  controllers: [UserController],
  providers: [UserService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },]
})
export class UserModule {}
