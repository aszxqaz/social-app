import React from 'react'
import { Login } from './login'
import { Register } from './register'

type AuthenticationProps = {
	variant: 'login' | 'register'
}

const Authentication: React.FC<AuthenticationProps> = ({ variant, ...props }) => {
	return variant === 'login' ? <Login {...props} /> : <Register {...props} />
}

export default Authentication
