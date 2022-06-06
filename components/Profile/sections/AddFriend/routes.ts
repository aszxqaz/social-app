import { FriendshipStatus } from './AddFriendSection'

const FRIEND_REQUEST_ROUTE = '/api/friend-request'
const ACCEPT_REQUEST_ROUTE = '/api/accept-request'
const DELETE_FRIEND = '/api/delete-friend'
const CANCEL_REQUEST = '/api/cancel-request'

export const FRIEND_ROUTES: { [key in FriendshipStatus]: string } = {
	requestedIn: ACCEPT_REQUEST_ROUTE,
	requestedOut: CANCEL_REQUEST,
	none: FRIEND_REQUEST_ROUTE,
	friended: DELETE_FRIEND,
}

export const NEXT_MODES: { [key in FriendshipStatus]: FriendshipStatus } = {
	requestedIn: 'friended',
	requestedOut: 'none',
	none: 'requestedOut',
	friended: 'none',
}
