import { User } from '../../entities/User'

export const REQUIRED_USER_INFO: (keyof User)[] = ['id', 'firstName', 'lastName', 'images', 'avatar', 'followers']


function remove<T extends new () => any>(b: T, a: (keyof T)[]) {
  const c = {...b}
  a.forEach((e) => {
    delete c[e]
  })
}