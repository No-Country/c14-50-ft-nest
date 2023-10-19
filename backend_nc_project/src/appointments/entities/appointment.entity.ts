import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../common/baseEntity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Patient } from "src/patients/entities/patient.entity"
import { Specialtie } from "src/specialties/entities/specialtie.entity";

@Entity()
export class Appointment extends BaseEntity {

    @ManyToOne(() => Doctor, (doctor) => doctor.id,{eager:true})
    @JoinColumn()
    doctor: string

    @ManyToOne(() => Specialtie, (specialtie) => specialtie.name)
    @JoinColumn({
        name: 'specialty',
        referencedColumnName: 'name'
    })
    specialty:string

    @Column({
        nullable: true
    })
    day: string

    @Column({
        nullable: false
    })  
    interval: string

    @ManyToOne(() => Patient, (patient) => patient.id)
    @JoinColumn()
    patient: string
}