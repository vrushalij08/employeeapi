import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { Repository } from 'typeorm';
import { Salary } from './entities/salary.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalaryService {

   constructor(
    @InjectRepository(Salary)
    private readonly repo:Repository<Salary>,
   
   ){}
 
  create(createSalaryDto: CreateSalaryDto) {
    // let data=this.repo.save(createSalaryDto);

    return this.repo.save(createSalaryDto);
  }

  findAll() {
    return this.repo.findAndCount({
      relations:{
        employee:true
      }
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({id});
  }

  async findOneEmployee(employeId: any) {
    let employee=await this.repo.find({
     where:{
      employee:{
        id:employeId
      }
     }
    });
    // console.log("employeeid",employee);
    return employee[0]
  }

  update(id: number, updateSalaryDto: UpdateSalaryDto) {
    return `This action updates a #${id} salary`;
  }

  remove(id: number) {
    return `This action removes a #${id} salary`;
  }
}
