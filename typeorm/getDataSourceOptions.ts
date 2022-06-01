import { DataSourceOptions, EntitySchema, MixedList } from 'typeorm'
import { User } from '../entities/User'

export const getDataSourceOptions = (
	entities: MixedList<string | Function | EntitySchema<any>> | undefined,
): DataSourceOptions => ({
	type: 'postgres',
	database: process.env.TYPEORM_DATABASE,
	username: process.env.TYPEORM_USERNAME,
	password: process.env.TYPEORM_PASSWORD,
	host: process.env.TYPEORM_HOST,
	port: 5432,
	logging: process.env.NODE_ENV !== 'production',
	entities,
	synchronize: true,
})
