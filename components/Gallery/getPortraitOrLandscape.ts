type Tuple = [number, number]

export const getPortraitOrLandscape = ([clientWidth, clientHeight]: Tuple, [imgWidth, imgHeight]: Tuple) => {
	const screenRatio = clientWidth / clientHeight // 1/2
	const imageRatio = imgWidth / imgHeight // 2

	let computedWidth, computedHeight
	// Portait
	if (screenRatio > imageRatio) {
		computedHeight = clientHeight
		computedWidth = computedHeight * imageRatio
	}
	// Landscape
	if (screenRatio < imageRatio) {
		computedWidth = clientWidth // 1
		computedHeight = clientWidth / imageRatio
	}

	return [computedWidth, computedHeight]
}
