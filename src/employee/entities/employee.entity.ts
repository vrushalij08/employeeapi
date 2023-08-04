import { Salary } from "src/salary/entities/salary.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @Column()
    name:string;

    @Column()
    age:string;

    @Column()
    email:string;

    @Column()
    phoneNo:string;

    @Column()
    dob:string;
    
    @Column()
    gender:string;

    @Column()
    education:string;

    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(()=>Salary,salaryInfo=>salaryInfo.employee,{onDelete:'CASCADE'})
    @JoinColumn()
    salary:Salary
}
