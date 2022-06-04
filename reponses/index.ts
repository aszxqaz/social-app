import { LOGIN_ROUTE, MAIN_ROUTE } from '../routes'

export const REDIRECT_TO_LOGIN = {
	redirect: {
		destination: LOGIN_ROUTE,
		permanent: false,
	},
}

export const REDIRECT_TO_MAIN = {
	redirect: {
		destination: MAIN_ROUTE,
		permanent: false,
	},
}
