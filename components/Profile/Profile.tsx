import ProfileHeader, { ProfileHeaderProps } from './ProfileHeader'

export interface ProfileProps {
	profileHeaderProps: ProfileHeaderProps
}

const Profile: React.FC<ProfileProps> = ({profileHeaderProps}) => {
  console.log(`Profile props: ${JSON.stringify(profileHeaderProps)}`)
	return (
		<>
			<ProfileHeader {...profileHeaderProps} />
		</>
	)
}

export default Profile
