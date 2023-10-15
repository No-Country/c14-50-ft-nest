import { BaseEntity } from "../../../common/baseEntity/index";
import { Entity, Column  } from 'typeorm';

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

    @Column()
    role: string;
    
}