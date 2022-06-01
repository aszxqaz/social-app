import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id!: string

	@Column('varchar', { length: 30 })
	firstName!: string
	
  @Column('varchar', { length: 30 })
	lastName!: string

	@Column('varchar', { length: 30 })
	email!: string

	@Column('varchar', { length: 30 })
	password!: string

  @Column('text', { array: true, nullable: true })
  images!: string[]
}
