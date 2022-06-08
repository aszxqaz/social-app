import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import multer from 'multer'
import { supabase, SUPABASE_IMAGES_BUCKET } from '../../supabase'
import { v4 } from 'uuid'
import imgSize from 'image-size'
import { promisify } from 'util'
// {
// 	storage: multer.diskStorage({
// 		destination: './public/uploads',
// 		filename: (req, file, cb) => cb(null, file.originalname),
// 	}),
// }

const upload = multer()

const imageUploadRoute = nc<NextApiRequest, NextApiResponse>({
	onNoMatch(req, res) {
		res.status(405)
	},
})

const uploadMiddleware = upload.array('theFiles')

imageUploadRoute.use(uploadMiddleware)

imageUploadRoute.post(async (req, res) => {
	try {
		// @ts-ignore
		const file: Express.Multer.File = req.files[0]
    console.log(file)

    const {width, height} = imgSize(file.buffer)
		const fileExt = file.originalname.split('.').pop()
		const fileName = `${v4()}.${fileExt}`
		const filePath = `${fileName}`
    
		let { error: uploadError } = await supabase.storage.from(SUPABASE_IMAGES_BUCKET).upload(filePath, file.buffer, {
      contentType: file.mimetype
    })

		if (uploadError) {
			throw uploadError
		}
	} catch (e) {
		console.log(e)
	}
	res.status(200).end()
})

export default imageUploadRoute

export const config = {
	api: {
		bodyParser: false,
	},
}
