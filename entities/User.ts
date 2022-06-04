import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
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

	@Column('text', { array: true, default: [] })
	images!: string[]

	@Column('text', { nullable: true })
	avatar!: string

	// @ManyToMany(() => User)
	// @JoinTable({ joinColumn: { name: 'userId_2 '} })
	// friends!: User[]

	@ManyToMany(() => User, (user) => user.following)
	@JoinTable()
	followers!: User[]

	@ManyToMany(() => User, (user) => user.followers)
	following!: User[]
}
