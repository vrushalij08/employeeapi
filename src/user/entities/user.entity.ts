import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        default: null,
    })
    firstName:string;

    @Column({default: null,})
    lastName:string;

    @Column({default: null,})
    email:string;

    @Column({default: null,})
    password:string;
}
