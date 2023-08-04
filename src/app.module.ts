import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { SalaryModule } from './salary/salary.module';
import { Salary } from './salary/entities/salary.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      database:'nest',
      username:'root',
      password:'password',
      port:3306,
      entities:[User,Employee,Salary],
      synchronize:true
    }),
    UserModule,
    EmployeeModule,
    SalaryModule,
   
  ],
  controllers: [AppController],
  providers: [AppService,
   ],
})
export class AppModule {}
