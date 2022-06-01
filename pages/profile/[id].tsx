import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps, NextPage } from 'next'
import { Profile } from '../../components/Profile'
import { mockLastSeen } from '../../components/Profile/utils/lastSeen'

const ProfilePage: NextPage = () => {
	const router = useRouter()
	const info = {
		username: 'Maxim Butenko',
		lastSeen: mockLastSeen(),
	}

	return (
		<>
			<Profile profileHeaderProps={{ ...info }} />
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
// 	const { id } = query
// 	return {
// 		props: {},
// 	}
// }

export default ProfilePage
