import moment from 'moment'

export const getLastSeen = (lastSeen: Date) => {
	return moment(lastSeen).fromNow()
}

export const mockLastSeen = () => {
  const now = new Date()
  // from 0 to 1000 * 60 * 60 * 24
  const random = 0.2 * 1000 * 60 * 60 * 24
  const mockDate = new Date(+now - random)
  return mockDate
}