import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { EmployeeService } from 'src/employee/employee.service';

@Controller('salary')
export class SalaryController {
  constructor(
    private readonly salaryService: SalaryService,
    private readonly employeeService:EmployeeService) {}

  @Post()
  async create(@Body() createSalaryDto: CreateSalaryDto) {
    let data:any=await this.salaryService.create(createSalaryDto);
    console.log("salary",data,createSalaryDto)
    if(data){
      this.employeeService.update(createSalaryDto.employeeId,{"salary":data.id})
    }
    return data;
  }

  @Get()
  findAll() {
    return this.salaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryService.findOne(+id);
  }

  @Get('employee/:id')
  findOneEmployee(@Param('id') id: string) {
    return this.salaryService.findOneEmployee(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salaryService.update(+id, updateSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaryService.remove(+id);
  }
}
