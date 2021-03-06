import { useCallback, useEffect, useState } from 'react'

export const useClientRect = () => {
	const [[clientWidth, clientHeight], setClientRect] = useState(getClientRect())

	function getClientRect(): [number, number] {
		const clientWidth = document.documentElement.clientWidth
		const clientHeight = document.documentElement.clientHeight
		return [clientWidth, clientHeight]
	}

	const onResize = useCallback(() => {
		setClientRect(getClientRect())
	}, [])

	useEffect(() => {
		window.addEventListener('resize', onResize)
		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [onResize])

	return [clientWidth, clientHeight]
}

export const useImages = () => {}
