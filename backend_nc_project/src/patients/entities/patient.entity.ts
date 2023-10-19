
import { User } from "src/auth/user/entities/user.entity";
import { BaseEntity } from "src/common/baseEntity";

import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class Patient extends BaseEntity {

    @Column({nullable:false})
    firstName:string

    @Column({nullable:false})
    lastName:string

    @Column({nullable:false})
    birthDate:string

    @Column({unique:true,nullable:true})
    phone?:string

    @Column({nullable:true})
    healthInsurance?:string

    @OneToOne(() => User, (user) => user.patient)
    user: User;

}


