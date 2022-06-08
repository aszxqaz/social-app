import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { followService } from '../../prisma/user/followService'
import gm from 'gm'
import { promisify } from 'util'
import imageSize from 'image-size'
const sizeOf = promisify(imageSize)

export default async function uploadImage(req: NextApiRequest, res: NextApiResponse) {
	const size = await sizeOf(req.body)
	if (!size) return res.status(200).end()
	const { width, height } = size
	console.log(`${width} x ${height}`)
	return res.status(200).end()
}

// async function getSize(stream: any) {
// 	let imageMagick = gm.subClass({ imageMagick: true })
// 	return new Promise<gm.Dimensions>((resolve, reject) =>
// 		imageMagick(stream).size((err, value) => {
// 			if (err) return reject(err)
// 			resolve(value)
// 		}),
// 	)
// }
