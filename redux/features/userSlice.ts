import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../entities/User'

type Omit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] }

export type FromUser = Partial<Omit<User, 'password' | 'followers' | 'following' | 'email'>>

export type ForProfile = {
	lastSeen: Date | null
}

export type ProfileInfo = FromUser & ForProfile

const initialState: ProfileInfo = {
	avatar: '',
	firstName: '',
	lastName: '',
	images: [],
	lastSeen: null,
	id: '',
}
