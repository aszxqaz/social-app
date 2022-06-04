export type WithKey<T> = T & { key: number }

export function withKey<T extends Record<string, any>>(objArray: T[]): WithKey<T>[] {
	return objArray.map((obj) => ({ ...obj, key: Math.random() }))
}
