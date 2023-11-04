
import { User } from "src/auth/user/entities/user.entity";
import { BaseEntity } from "src/common/baseEntity";
import { HealthInsurance } from "src/health-insurance/entity/health-insurance.entity";
import { Column, Entity, JoinTable, OneToOne } from "typeorm";

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
    @OneToOne(() => HealthInsurance, (healthInsurance) => healthInsurance.id)
    @JoinTable()
    healthInsurance?:string

    @OneToOne(() => User, (user) => user.patient)
    user: User;

}


