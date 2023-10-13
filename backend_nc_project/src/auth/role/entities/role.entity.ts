import { ERole } from '../../../common/enum';
import { BaseEntity } from '../../../common/baseEntity';
import { Entity, Column } from 'typeorm';


@Entity()
export class Role extends BaseEntity {

  @Column({
    unique: true,
    nullable: false,
  })
  name: ERole;

}
