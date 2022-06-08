import { Box, Center } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GalleryImage } from '../../pages/gallery'
import { getPortraitOrLandscape } from './getPortraitOrLandscape'
import { useClientRect } from './useClientRect'
import { wrap } from './utils/wrap'

interface GalleryProps {
	images: GalleryImage[]
}

const variants = {
	enter: ({ direction, clientWidth }: { direction: number; clientWidth: number }) => {
		return {
			x: direction > 0 ? clientWidth : -clientWidth,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: ({ direction, clientWidth }: { direction: number; clientWidth: number }) => {
		return {
			zIndex: 0,
			x: direction < 0 ? clientWidth : -clientWidth,
			opacity: 0,
		}
	},
}

const SWIPE_CONFIDENCE_THRESHOLD = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	const [[page, direction], setPage] = useState([0, 0])
	const [clientWidth, clientHeight] = useClientRect()
	const imageIndex = wrap(0, images.length, page)
	const img = images[imageIndex]
	const [width, height] = getPortraitOrLandscape([clientWidth, clientHeight], [img.width, img.height])

	console.log(`[${width}; ${height}]`)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<AnimatePresence initial={false}>
			<Center width="100%" height="100vh" overflow="hidden" bgColor="#000">
				<Box width={width} height={height} bgColor="#000">
					<motion.div
						key={img.url}
						custom={{ direction, clientWidth }}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'just', stiffness: 300, damping: 30 },
							opacity: { duration: 0.1 },
						}}
						drag="x"
						dragConstraints={{ right: 0, left: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x)
							if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
								paginate(-1)
							} else if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
									paginate(1)
							}
						}}
						dragSnapToOrigin={true}
						dragTransition={{ bounceStiffness: 500, bounceDamping: 50, power: 10 }}
						style={{
							zIndex: '3',
							background: 'black',
						}}>
						<Image
							draggable="false"
              alt=""
							onDrag={(e) => {
								e.preventDefault()
							}}
							onDragOver={(e) => {
								e.preventDefault()
							}}
							src={img.url}
							height={img.height}
							width={img.width}
							layout="responsive"
							objectFit="contain"
							objectPosition=""
						/>
					</motion.div>
				</Box>
			</Center>
		</AnimatePresence>
	)
}

export default Gallery
