import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from './entities/salary.entity';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports:[TypeOrmModule.forFeature([Salary]),EmployeeModule],
  controllers: [SalaryController],
  providers: [SalaryService]
})
export class SalaryModule {}
