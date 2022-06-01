import ProfileHeader, { ProfileHeaderProps } from './ProfileHeader'

export interface ProfileProps {
	profileHeaderProps: ProfileHeaderProps
}

const Profile: React.FC<ProfileProps> = ({profileHeaderProps}) => {
	return (
		<>
			<ProfileHeader {...profileHeaderProps} />
		</>
	)
}

export default Profile
