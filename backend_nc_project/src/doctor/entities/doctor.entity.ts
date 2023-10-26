import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { Gender } from "../../common/enum";
import { BaseEntity } from "../../common/baseEntity";
import { Specialtie } from "src/specialties/entities/specialtie.entity";
import { User } from "src/auth/user/entities/user.entity";
import { Schedule } from "src/schedule/entities/schedule.entity";

@Entity()
export class Doctor extends BaseEntity{

    @Column({
        nullable: false
    })
    firstName: string

    @Column({
        nullable: false
    })
    lastName: string

    @Column({
        nullable: false
    })
    birthDate: string

    @Column({
        nullable: true
    })
    phone: string

    @OneToMany(()=>Schedule,(schedule)=>schedule.doctor,{eager:true})
    @JoinColumn()
    schedules: Schedule[]

    @Column({ unique:true})
    registrationNumber:number
    
    @Column({
        nullable: true
    })
    gender: Gender

    @OneToOne(() => User, (user) => user.doctor)
    user: User;

    @ManyToMany(() => Specialtie, (specialtie) => specialtie.doctors)
    @JoinTable()
    specialties: string[]

}
