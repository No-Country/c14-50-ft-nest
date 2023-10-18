import { BaseEntity } from "../../../common/baseEntity/index";
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Role } from "../../../auth/role/entities/role.entity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity";


@Entity()
export class User extends BaseEntity {

    @Column({
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        nullable: false,
        unique: true,
        type: 'bigint'
    })
    document: number

    @Column({
        nullable: false,
        select: false
    })
    password: string

    @ManyToOne(() => Role)
    @JoinColumn({
        name: 'role',
        referencedColumnName: 'name'
    })
    role: string;

    @OneToOne(() => Doctor, (doctor) => doctor.user)
    @JoinColumn()
    doctor: Doctor;

    @OneToOne(() => Patient, (patient) => patient.user)
    @JoinColumn()
    patient: Patient;
    
}