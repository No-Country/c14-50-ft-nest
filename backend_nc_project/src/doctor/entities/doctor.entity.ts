import { Column, Entity } from "typeorm";
import { Gender } from "../../common/enum";
import { BaseEntity } from "../../common/baseEntity";

@Entity()
export class Doctor extends BaseEntity{

    @Column({
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    lastName: string

    @Column({
        nullable: false
    })
    birthDate: string

    @Column({
        nullable: true
    })
    phone: string

    @Column({
        nullable: true
    })
    gender: Gender


}
