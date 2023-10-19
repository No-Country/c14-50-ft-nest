import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { Gender } from "../../common/enum";
import { BaseEntity } from "../../common/baseEntity";
import { Specialtie } from "src/specialties/entities/specialtie.entity";
import { User } from "src/auth/user/entities/user.entity";

@Entity()
export class Doctor extends BaseEntity{

    @Column({
        nullable: false
    })
    name: string

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

    @Column({
        nullable: true
    })
    gender: Gender

    @OneToOne(() => User, (user) => user.doctor)
    user: User;

    @ManyToMany(() => Specialtie, (specialtie) => specialtie.doctors)
    @JoinTable()
    specialties: Specialtie[]
}
