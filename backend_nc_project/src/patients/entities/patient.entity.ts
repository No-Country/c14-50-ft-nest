import { Transform } from "class-transformer";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {

    @PrimaryGeneratedColumn('uuid')
    id:number

    @Column({nullable:false})
    firstName:string

    @Column({nullable:false})
    lastName:string


    @Column({nullable:false,unique:true})
    document:number

    @Transform(({value})=>value.trim())
    @Column({nullable:false,select:false})
    password:string

    @Column({nullable:false,unique:true})
    email:string

    @Column({nullable:false})
    birthDate:string

    @Column({default:'patient',readonly:true})
    role:string

    @Column({unique:true,nullable:true})
    phone?:string

    @Column({nullable:true})
    healthInsurance?:string

    @OneToOne(() => User, (user) => user.patient)
    user: User;


}


