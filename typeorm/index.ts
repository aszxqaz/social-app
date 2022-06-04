import { DataSource, DeepPartial, FindOneOptions, FindOptionsWhere, Repository } from 'typeorm'
import { User } from '../entities/User'
import { getDataSourceOptions } from './getDataSourceOptions'

class UserService {
	private dataSource: DataSource
	private userRepo: Repository<User>

	constructor() {
		this.dataSource = new DataSource(getDataSourceOptions([User]))
		this.userRepo = this.dataSource.getRepository(User)
	}

	async init() {
		if (!this.dataSource.isInitialized) {
			await this.dataSource.initialize()
		}
	}

	async createUser(entityLike: DeepPartial<User>) {
		await this.init()
		const user = this.userRepo.create(entityLike)
		await this.userRepo.save(user)
	}

	async findUser(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
		await this.init()
		return await this.userRepo.findOne({ where })
	}

	async findOne(options: FindOneOptions<User>) {
		await this.init()
		return await this.userRepo.findOne(options)
	}

	async getField(id: string, field: keyof User) {
		switch (field) {
			case 'followers': {
				// const categoriesWithQuestions = await this.userRepo
				// 	.createQueryBuilder('category')
				// 	.leftJoinAndSelect('category.questions', 'question')
				// 	.getMany()
				return await this.userRepo.find({
					where: { id },
					relations: {
						followers: true,
					},
				})
			}
		}
	}

	async findAll() {
		await this.init()
		return await this.userRepo.find()
	}

	async getInfo(id: string, fields: Array<keyof User>) {
		let select: Partial<{ [T in keyof User]: true }> = {}

		fields.forEach((key) => {
			select[key] = true
		})

		const user = await this.findOne({
			where: { id },
			select,
			relations: {
				followers: true,
			},
		})

		const result: any = {}
		fields.forEach((key) => {
			if (user?.[key] !== undefined) {
				// @ts-ignore
				result[key] = user[key]
			}
		})
		return result
	}
}

const userService = new UserService()

export { userService }
