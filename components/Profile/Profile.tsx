import { useContext } from 'react'
import { CATEGORIES } from '../../content/profile/categories'
import { ProfileContext } from '../../pages/profile/[id]'
import AddFriendDialogButtons from './sections/AddFriendDialogButtons'
import Categories from './sections/Categories'
import ProfileHeader from './sections/ProfileHeader'

interface ProfileProps {

}

const Profile: React.FC = () => {
  const info = useContext(ProfileContext)
	return (
		<>
			<ProfileHeader />
			<AddFriendDialogButtons />
			<Categories categories={CATEGORIES} />
		</>
	)
}

export default Profile
