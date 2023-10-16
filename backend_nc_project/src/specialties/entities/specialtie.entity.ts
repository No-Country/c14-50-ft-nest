import { Transform } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialtie {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({nullable:false})
    name:string
}