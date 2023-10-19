import { BaseEntity } from "src/common/baseEntity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Schedule extends BaseEntity{

    @Column({nullable:true})
    dia:string

    @Column()
    startTime:string

    @Column()
    endTime:string

    @Column()
    interval:string

    @Column({default:false})
    occupied:boolean

    @ManyToOne(()=>Doctor,(doctor) => doctor.schedules)
    @JoinColumn()
    doctor:Doctor

}
