import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('contents')
export class Content {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  type: string

  @Column()
  category: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
