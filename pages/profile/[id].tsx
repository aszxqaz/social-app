import React, { createContext, useContext } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Profile } from '../../components/Profile'
import { mockLastSeen } from '../../components/Profile/utils/lastSeen'
import { getSession } from 'next-auth/react'
import { getToken, GetTokenParams } from 'next-auth/jwt'
import { userService } from '../../typeorm'
import { REDIRECT_TO_LOGIN, REDIRECT_TO_MAIN } from '../../reponses'
import { REQUIRED_USER_INFO } from '../../components/Profile/required_info'
import { ProfileInfo } from '../../redux/features/userSlice'

interface ProfilePageProps {
	profileInfo: ProfileInfo
}

export const ProfileContext = createContext<ProfileInfo>({} as ProfileInfo)

const ProfilePage: NextPage<ProfilePageProps> = ({ profileInfo }) => {
	console.log(profileInfo)
	return (
		<ProfileContext.Provider value={profileInfo}>
			<Profile />
		</ProfileContext.Provider>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const { id } = query
	const session = await getSession({ req })
	const token = await getToken({ req } as GetTokenParams)

	console.log(`token : `, token?.sub)

	if (!session) return REDIRECT_TO_LOGIN

	if (typeof id !== 'string') return REDIRECT_TO_MAIN

	const profileInfo = await userService.getInfo(id, REQUIRED_USER_INFO)
  console.log(profileInfo)
	return {
		props: {
			profileInfo,
		},
	}
}

export default ProfilePage
