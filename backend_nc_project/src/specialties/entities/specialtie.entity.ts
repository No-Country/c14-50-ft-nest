import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "../../common/baseEntity";
import { Doctor } from "src/doctor/entities/doctor.entity";

@Entity()
export class Specialtie extends BaseEntity {

    @Column({nullable:false})
    name:string

    @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
    doctors: Doctor[]
}