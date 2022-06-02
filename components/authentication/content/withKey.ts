export type WithKey<T> = T & { key: number }

export const withKey = <T extends object>(objArray: T[]): WithKey<T>[] =>
	objArray.map((obj) => ({ ...obj, key: Math.random() }))
