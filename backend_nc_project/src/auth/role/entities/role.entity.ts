import { ERole } from '../../../common/enum';
import { BaseEntity } from '../../../common/baseEntity';
import { Entity, Column,  } from 'typeorm';
//import { User } from 'src/auth/user/entities/user.entity';


@Entity()
export class Role extends BaseEntity {

  @Column({
    unique: true,
    nullable: false,
  })
  name: ERole;

  //@OneToMany(()=>User,(user)=>user.role)
  //user: User;
}
