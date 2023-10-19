import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/baseEntity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity"
import { Specialtie } from "src/specialties/entities/specialtie.entity";

@Entity()
export class Appointment extends BaseEntity {
    @Column({
        nullable: false
    })
    @OneToOne(() => Doctor, (doctor) => doctor)
    doctor: string

    @Column({
        nullable: false
    })
    @OneToOne(() => Doctor, (doctor) => doctor.specialties)
    especiality:string

    @Column({
        nullable: true
    })
    // relation schedule
    birthDate: string

    @Column({
        nullable: true
    })  
    // relation schedule
    hour: string

    @Column({
        nullable: false
    })  
    interval: string

    @Column({
        nullable: false
    })
    @OneToOne(() => Patient, (patient) => patient.user)
    patient: string

}