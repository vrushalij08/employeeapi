import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { SalaryService } from 'src/salary/salary.service';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private readonly repo:Repository<Employee>,
    // private readonly salaryService:SalaryService
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.repo.save(createEmployeeDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({id});

  }

  // findOneWithSalary(id: number) {
  //   let data=this.repo.findOneBy({id});
  //   data['salary']=this.salaryService.
  //   // return this.repo.findOneBy({id});

  // }

  update(id: number, updateEmployeeDto: any) {
    return this.repo.update(id,updateEmployeeDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
