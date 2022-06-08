import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { supabase, SUPABASE_IMAGES_BUCKET } from '../supabase'
import gm from 'gm'

import dynamic from 'next/dynamic'

const Gallery = dynamic(() => import('../components/Gallery/Gallery'), { ssr: false })

export type GalleryImage = {
	url: string
	width: number
	height: number
}

interface GalleryProps {
	img: GalleryImage
}

const GalleryPage: NextPage = () => {
	return (
		<Gallery
			images={[
				{
					url: '/gallery/pexels1.jpg',
					width: 1980,
					height: 2475,
				},
				{
					url: '/gallery/pexels2.jpg',
					width: 3066,
					height: 3968,
				},
				{
					url: '/gallery/pexel3.jpg',
					width: 2401,
					height: 3598,
				},
				{
					url: '/gallery/pexels4.jpg',
					width: 3593,
					height: 2695,
				},
			]}
		/>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {},
	}
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
// 	try {
// 		const { data, error } = await supabase.storage.from(SUPABASE_IMAGES_BUCKET).download('wallpaper-1.jpg')
//     console.log(data)
// 		if (error) {
// 			throw error
// 		}
// 		if (!data) return { props: {} }

// 		// const url = Buffer.from(await data.arrayBuffer())
//     console.log(`url: `, url)

// 		return {
// 			props: {

// 			},
// 		}
// 	} catch (error: any) {
// 		console.log('Error downloading image: ', error.message)
// 	}
// 	return {
// 		props: {},
// 	}
// }

export default GalleryPage
