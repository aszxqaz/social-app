import { DataSource, DeepPartial, FindOptionsWhere, Repository } from 'typeorm'
import { User } from '../entities/User'

class UserService {
	private dataSource: DataSource
	private userRepo: Repository<User>

	constructor() {
		this.dataSource = new DataSource({
			type: 'postgres',
			database: 'postgres',
			username: 'postgres',
			password: 'kY1cu2ImCtEoL4mlhRv9aH7ReP7HQVhF',
			host: 'db.cvmmvqklawjoptbvcact.supabase.co',
			port: 5432,
			logging: process.env.NODE_ENV !== 'production',
			entities: [User],
			synchronize: process.env.NODE_ENV !== 'production',
		})
		this.userRepo = this.dataSource.getRepository(User)
	}

	async init() {
		if (!this.dataSource.isInitialized) {
			await this.dataSource.initialize()
		}
	}

	async createUser(entityLike: DeepPartial<User>) {
		await this.init()
		return await this.userRepo.create(entityLike).save()
	}

	async findUser(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
		await this.init()
		return await this.userRepo.findOne({ where })
	}

  async findAll() {
    await this.init()
    return await this.userRepo.find()
  }
}

const userService = new UserService()

export { userService }
