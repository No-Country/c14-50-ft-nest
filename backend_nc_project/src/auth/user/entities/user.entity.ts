import { Phone } from "src/common/interface";
import { BaseEntity } from "../../../common/baseEntity/index";
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Gender } from "src/common/enum";


@Entity()
export class User extends BaseEntity {
    @Column({
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    lastname: string

    @Column({
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        nullable: false,
        unique: true
    })
    document: number

    @Column({
        nullable: false
    })
    password: string

    @Column({
        nullable: false
    })
    birthdate: string

    // @Column({
    //     nullable: false
    // })
    // phone: Phone

    @Column({
        nullable: false
    })
    gender: Gender
    
}