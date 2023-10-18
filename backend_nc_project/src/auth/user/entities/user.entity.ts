import { BaseEntity } from "../../../common/baseEntity/index";
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Gender } from "../../../common/enum";
import { Role } from "../../../auth/role/entities/role.entity";


@Entity()
export class User extends BaseEntity {
    // @Column({
    //     nullable: false
    // })
    // name: string

    // @Column({
    //     nullable: false
    // })
    // lastName: string

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
        nullable: false
    })
    password: string

    // @Column({
    //     nullable: false
    // })
    // birthdate: string

    // @Column({
    //     nullable: true
    // })
    // phone: string

    // @Column({
    //     nullable: true
    // })
    // gender: Gender

    @ManyToOne(() => Role)
    @JoinColumn({
        name: 'role',
        referencedColumnName: 'name'
    })
    role: string;

    // @OneToOne(() => );
    
}