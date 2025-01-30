import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { User } from 'src/user/entity'

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => User, (user) => user.company)
  users: User[]
}
