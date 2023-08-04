import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salary {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false
    })
    tctc:number

    @Column({
        nullable:false
    })
    inHandCtc:number

    @Column({
        nullable:true
    })
    bonus:number

    @Column({
        nullable:false
    })
    pf:number

    @Column({
        nullable:true
    })
    monthlyInHand:number
    
    @OneToOne(()=>Employee,employee=>employee.salary)
    @JoinColumn()
    employee:Employee

}
