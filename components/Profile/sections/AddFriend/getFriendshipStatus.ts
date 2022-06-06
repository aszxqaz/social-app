import { FollowRequests, Follows } from '@prisma/client'
import { ProfilePageProps } from '../../../../pages/profile/[id]'
import { AddFriendSectionProps } from './AddFriendSection'
import { FriendshipStatus } from './options'

export function getFriendshipStatus(friends: Follows[], requests: FollowRequests[], meId: string): FriendshipStatus {
	for (let i = 0; i < friends.length; i++) {
		if (friends[i].followerId === meId || friends[i].followingId === meId) return 'friended'
	}

	for (let i = 0; i < requests.length; i++) {
		if (requests[i].receiverId === meId) return 'requestedIn'
		if (requests[i].senderId === meId) return 'requestedOut'
	}

	return 'none'
}
