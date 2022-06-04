import { Center } from '@chakra-ui/react'
import React, {
	forwardRef,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
	useImperativeHandle,
	useState,
} from 'react'

const ErrorMessageF: ForwardRefExoticComponent<
	PropsWithoutRef<{}> & RefAttributes<{ sendError: (msg: string) => void }>
> = forwardRef(function ErrorMessage(_, ref) {
	const [error, setError] = useState('')

	useImperativeHandle(ref, () => ({
		sendError: (msg: string) => {
			setError(msg)
		},
	}))

	return (
		<Center color="red" my={1} minH="1.5rem">
			{error}
		</Center>
	)
})

export { ErrorMessageF as ErrorMessage }
