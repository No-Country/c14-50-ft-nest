import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/baseEntity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity"

@Entity()
export class HealthInsurance extends BaseEntity {
    @Column({
        nullable: false
    })
    name: string

    @OneToMany(() => Patient, (patient) => patient.id, {eager:true})
    @JoinColumn()
    patient: string;

    @ManyToOne(() => Doctor, (doctor) => doctor.id, {eager:true})
    @JoinColumn()
    doctor: string;
}