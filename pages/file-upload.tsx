import React, { ChangeEvent, RefObject, useRef, useState } from 'react'
import { FormLabel, Input } from '@chakra-ui/react'
import { supabase, SUPABASE_IMAGES_BUCKET } from '../supabase'
import { v4 } from 'uuid'
import UploadButton from '../components/upload/UploadButton'
import gm from 'gm'
import axios from 'axios'

interface FileUploadProps {
	children?: React.ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({}) => {
	const fileRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>
	const [uploading, setUploading] = useState<boolean>(false)

	const onChange = async (formData: FormData) => {
		// axios.interceptors.request.use(
		// 	(config) => {
		// 		//@ts-ignore
		// 		config.headers['Content-Type'] = 'multipart/form-data; charset=UTF-8'
		// 		return config
		// 	},
		// 	function (error) {
		// 		// Do something with request error
		// 		return Promise.reject(error)
		// 	},
		// )
		const response = await axios.post('api/image-upload', formData, {
			headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
			onUploadProgress: (e) => {
				console.log(`Progress ${Math.round((e.loaded || 0 * 100) / e.total)}`)
			},
		})
		console.log(response)
	}

	return <UploadButton onChange={onChange} uploadFileName="theFiles" label="Upload Single File" />
}

export default FileUpload
