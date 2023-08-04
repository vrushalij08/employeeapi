import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    "name": string;
    "age":string;
    "email": string;
    "phoneNo": string;
    "dob": string;
    "gender": string;
    "education": string;
    "salaryId":number
}
